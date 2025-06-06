/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { Sysctl } from "../specifics/pod";
import type { SeLinuxOptions } from "./se-linux-options";
import type { SeccompProfile } from "./seccomp-profile";
import type { WindowsSecurityContextOptions } from "./windows-security-context-options";

export interface PodSecurityContext {
  fsGroup?: number;
  fsGroupChangePolicy?: string;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: SeLinuxOptions;
  seccompProfile?: SeccompProfile;
  supplementalGroups?: number[];
  sysctls?: Sysctl;
  windowsOptions?: WindowsSecurityContextOptions;
}
