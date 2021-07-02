import { ENABLE_SENTRY } from "../consts";
import Sentry from "./sentry";

export function reportExceptionMessage(message: string, details: string) {
  if (ENABLE_SENTRY)
    Sentry.captureMessage(message, {
      level: Sentry.Severity.Error,
      contexts: {
        details: {
          details,
        },
      },
    });
}

export function reportException(exception: Error, reason = "") {
  if (ENABLE_SENTRY)
    Sentry.captureException(exception, {
      level: Sentry.Severity.Error,
      contexts: {
        details: {
          reason,
        },
      },
    });
}
