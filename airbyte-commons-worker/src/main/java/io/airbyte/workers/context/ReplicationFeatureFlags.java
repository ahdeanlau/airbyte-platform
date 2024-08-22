/*
 * Copyright (c) 2020-2024 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.workers.context;

/**
 * Feature flags to consider during a Replication job.
 */
public record ReplicationFeatureFlags(boolean isDestinationTimeoutEnabled,
                                      int workloadHeartbeatRate,
                                      long workloadHeartbeatTimeoutInMinutes,
                                      boolean failOnInvalidChecksum,
                                      boolean logStateMsgs,
                                      boolean logConnectorMsgs) {}
