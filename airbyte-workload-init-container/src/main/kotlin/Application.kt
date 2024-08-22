/*
 * Copyright (c) 2020-2024 Airbyte, Inc., all rights reserved.
 */
package io.airbyte.initContainer

import io.airbyte.commons.envvar.EnvVar
import io.github.oshai.kotlinlogging.KotlinLogging
import io.micronaut.context.ApplicationContext

private val logger = KotlinLogging.logger {}

fun main() {
  logger.info { "Init start" }

  val workloadId = EnvVar.WORKLOAD_ID.fetch()!!

  val applicationContext = ApplicationContext.run()

  val fetcher = applicationContext?.getBean(InputFetcher::class.java)

  fetcher?.fetch(workloadId)

  logger.info { "Init end" }
}
