package io.kotest.engine.js

import io.kotest.core.spec.style.FunSpec
import io.kotest.core.test.TestResult
import kotlinx.coroutines.delay
import kotlin.time.Duration
import kotlin.time.ExperimentalTime
import kotlin.time.milliseconds

@ExperimentalTime
class TimeoutTest : FunSpec() {
   init {

      aroundTest { (tc, fn) ->
         val result = fn(tc)
         if (tc.name.testName == "JS engine should capture timeouts" && result.isErrorOrFailure)
            TestResult.Success(0.milliseconds)
         else
            result
      }

      //  the default JS timeout in Karma is 2000, so if this passes when delay is > 2000 we know Kotest
      // is setting timeouts correctly on the karma promises
      test("JS engine should set timeout on the underlying promise").config(timeout = Duration.days(1)) {
         delay(2500)
      }

      // testing that we can set a very low timeout and capture it
      test("JS engine should capture timeouts").config(timeout = Duration.milliseconds(1)) {
         delay(10)
      }
   }
}
