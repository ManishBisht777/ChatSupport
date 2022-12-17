import React, { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const Support = () => {
  const [startChat, setStartChat] = useState(false);
  const [channel, setChannel] = useState(null);
  const [client, setClient] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    if (!startChat) return;

    const initChat = async () => {
      const clientData = StreamChat.getInstance("dz5f4d5kzrue");
      setClient(clientData);

      const userData = await clientData.setGuestUser({
        id: "GuestUser",
        name: "Guest User",
        image: "https://bit.ly/2u9Vc0r",
      });
      console.log(userData.me);
      setUser(userData.me);

      const channelData = clientData.channel(
        "messaging",
        "ArtsyLiveSupportChat",
        {
          image:
            "https://res.cloudinary.com/drsm0ncyx/image/upload/v1671252183/languages/artsy_jr81ja.svg",
          name: "Channel for Live Support",
        }
      );

      setChannel(channelData);
    };

    initChat();
  }, [startChat]);

  return (
    <section className="support container container--col gap--lg">
      <h2>Ask Your Queries</h2>
      <p>We provide live chat support to help you out whenever you are stuck</p>

      <div className="chat">
        <div id="chatbox" className="chatbox container container--col gap--md">
          {client && channel && startChat ? (
            <Chat client={client} theme="str-chat__theme-light">
              <Channel channel={channel}>
                <Window>
                  <ChannelHeader />
                  <MessageList />
                  <MessageInput />
                </Window>
                <Thread />
              </Channel>
            </Chat>
          ) : (
            <div className="startchat">
              <button
                className="button--dark"
                onClick={() => setStartChat(true)}
              >
                Start Chat
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Support;
