import CSBrowserSdk from "circle-stream/sdk";
import { MessageType } from "circle-stream/sdk/dist/types/MessageArchitect";
import { useState, useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export default function useCSSDK(
  endpoint: string,
  channel: string,
  username: string
): [CSBrowserSdk | null, string[]] {
  const [sdk, setSdk] = useState<CSBrowserSdk | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [initiated, setInitiated] = useState(false);
  const oldChannelName = usePrevious(channel);
  const oldUsername = usePrevious(username);

  useEffect(() => {
    if (sdk && (username !== oldUsername || channel !== oldChannelName)) {
      sdk.closeConnection();
      setSdk(null);
      setInitiated(false);
    }

    if (sdk) {
      if (initiated) {
        sdk.onMessageListeners.push((message) => {
          switch (message.type) {
            case MessageType.USER_JOIN:
              setOnlineUsers([...onlineUsers, message.as]);
              break;
            case MessageType.USER_LEFT: {
              const ou = onlineUsers.filter((v) => v !== message.as);
              setOnlineUsers(ou);
              break;
            }
            default:
              break;
          }
          if (message.type === MessageType.USER_JOIN) {
            setOnlineUsers([...onlineUsers, message.as]);
          }
        });
        setInitiated(true);
      }
    } else {
      setSdk(new CSBrowserSdk(endpoint, channel, username));
    }
  });

  return [sdk, onlineUsers];
}
