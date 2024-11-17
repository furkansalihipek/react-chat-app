import { useEffect, useState, useRef } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const sendMessage = () => {
    if (text.trim()) {
      console.log("Message sent:", text);
      setText("");
    }
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="User Avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="Phone Icon" />
          <img src="./video.png" alt="Video Icon" />
          <img src="./info.png" alt="Info Icon" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo,
              voluptatem maxime, atque enim nam velit inventore distinctio voluptatum asperiores corporis aliquid odit excepturi impedit.
              Adipisci veritatis ullam deleniti qui!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo,
              voluptatem maxime, atque enim nam velit inventore distinctio voluptatum asperiores corporis aliquid odit excepturi impedit.
              Adipisci veritatis ullam deleniti qui!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo,
              voluptatem maxime, atque enim nam velit inventore distinctio voluptatum asperiores corporis aliquid odit excepturi impedit.
              Adipisci veritatis ullam deleniti qui!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo,
              voluptatem maxime, atque enim nam velit inventore distinctio voluptatum asperiores corporis aliquid odit excepturi impedit.
              Adipisci veritatis ullam deleniti qui!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo,
              voluptatem maxime, atque enim nam velit inventore distinctio voluptatum asperiores corporis aliquid odit excepturi impedit.
              Adipisci veritatis ullam deleniti qui!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo,
              voluptatem maxime, atque enim nam velit inventore distinctio voluptatum asperiores corporis aliquid odit excepturi impedit.
              Adipisci veritatis ullam deleniti qui!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="Image Icon" />
          <img src="./camera.png" alt="Camera Icon" />
          <img src="./mic.png" alt="Mic Icon" />
        </div>

        <input
          type="text"
          placeholder="Type a message.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="emoji">
          <img src="./emoji.png" alt="Emoji Icon" onClick={() => setOpen((prev) => !prev)} />
          {open && (
            <div className="picker">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>

        <button className="sendButton" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
