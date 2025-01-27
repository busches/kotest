package io.kotest.engine.spec.interceptor

import io.kotest.core.config.ExtensionRegistry
import io.kotest.core.extensions.SpecExtension
import io.kotest.core.spec.Spec
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.engine.spec.SpecExtensions

/**
 * A [SpecInterceptor] that executes all [SpecExtension]s.
 */
internal class SpecExtensionInterceptor(registry: ExtensionRegistry) : SpecInterceptor {

   val extensions = SpecExtensions(registry)

   override suspend fun intercept(
      spec: Spec,
      fn: suspend (Spec) -> Result<Map<TestCase, TestResult>>
   ): Result<Map<TestCase, TestResult>> {
      return extensions.intercept(spec) { fn(spec) }
   }
}

