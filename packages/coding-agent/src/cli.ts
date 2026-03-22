#!/usr/bin/env node
/**
 * CLI entry point for the refactored coding agent.
 * Uses main.ts with AgentSession and new mode modules.
 *
 * Test with: npx tsx src/cli-new.ts [args...]
 */
process.title = "pi";
process.emitWarning = (() => {}) as typeof process.emitWarning;

import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";
import { main } from "./main.js";

setGlobalDispatcher(
	new EnvHttpProxyAgent({
		headersTimeout: 30 * 60 * 1000, // 30 min - slow local models need time for thinking
		bodyTimeout: 30 * 60 * 1000,
	}),
);

main(process.argv.slice(2));
