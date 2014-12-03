package testgenerator;

import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Date;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;

/**
 * @author Amin Milani Fard
 */
public class QUnitTestGenerator {

	private final VelocityEngine engine;
	private final VelocityContext context;
	private final String moduleName;

	public QUnitTestGenerator(String moduleName, ArrayList<TestFunction> testFunctions) throws Exception {

		engine = new VelocityEngine();
		engine.setProperty(VelocityEngine.RUNTIME_LOG_LOGSYSTEM_CLASS, "org.apache.velocity.runtime.log.NullLogChute");
		engine.init();

		context = new VelocityContext();
		this.moduleName = moduleName;
		context.put("date", new Date().toString());
		context.put("moduleName", moduleName);
		context.put("testFunctions", testFunctions);		
	}

	/**
	 * @param outputFolderName
	 * @param outputFileName
	 * @param fileNameTemplate
	 * @return filename of generates class
	 * @throws Exception
	 */
	public String generate(String outputFolderName, String outputFileName, String fileNameTemplate) throws Exception {

		Template template = engine.getTemplate(fileNameTemplate);
		File directory = new File(outputFolderName);
		if (!directory.exists()){
			boolean success = directory.mkdir();
			if (success) {
				System.out.printf("Successfully created new directory : %s%n", directory);
			} else {
				System.out.printf("Failed to create new directory: %s%n", directory);
			}
		}
		File f = new File(outputFolderName+"/"+outputFileName);
		FileWriter writer = new FileWriter(f);
		template.merge(context, writer);
		writer.flush();
		writer.close();
		return f.getAbsolutePath();

	}
}
