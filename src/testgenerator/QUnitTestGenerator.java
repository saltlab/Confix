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
	 * @param outputFolder
	 * @param fileNameTemplate
	 * @return filename of generates class
	 * @throws Exception
	 */
	public String generate(String outputFolder, String fileNameTemplate) throws Exception {

		Template template = engine.getTemplate(fileNameTemplate);
		File f = new File(outputFolder + moduleName + ".js");
		FileWriter writer = new FileWriter(f);
		template.merge(context, writer);
		writer.flush();
		writer.close();
		return f.getAbsolutePath();

	}
}
