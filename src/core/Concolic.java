package core;

public class Concolic {
	/*
	 * Concolic DOM generation
	 * 1) Input variables take values w.r.t DOM elements. These variables will be treated as symbolic variables
	 * during symbolic execution. All other variables will be treated as concrete values.
	 * 2) Instrument the program so that each operation which may affect a symbolic variable value or a path condition
	 * is logged to a trace file, as well as any error that occurs.
	 * 3) Choose an arbitrary input to begin with.
	 * 4) Execute the program.
	 * 5) Symbolically re-execute the program on the trace, generating a set of symbolic constraints (including path conditions).
	 * 6) Negate the last path condition not already negated in order to visit a new execution path. If there is no such path condition, 
	 * the algorithm terminates.
	 * 7) Invoke an automated theorem prover to generate a new input. If there is no input satisfying the constraints, 
	 * return to step 6 to try the next execution path.
	 * 8) Return to step 4.
	 */

}
