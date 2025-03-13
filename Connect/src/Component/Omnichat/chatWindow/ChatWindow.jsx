import {
  SendOutlined,
  PaperClipOutlined,
  SmileOutlined,
  GifOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  MinusCircleOutlined,
  HistoryOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Select, Button } from "antd";
import "./ChatWindow.css";
import CustomerInfo from "../customerInfo/CustomerInfo";

export default function ChatWindow({ selectedChat }) {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="user-chat">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="avatar-chat"
          />
          <div className="user-name-roles">
            <h4>{selectedChat ? selectedChat.name : "Chọn đoạn chat"}</h4>
            <Select
              className="select-roles-bar"
              bordered={false}
              defaultValue="Chọn nhân viên"
              options={[{ value: "Chọn nhân viên", label: "Chọn nhân viên" }]}
            />
          </div>
        </div>
        <div className="actions">
          <button>
            <LockOutlined />
          </button>
          <button>
            <EyeInvisibleOutlined />
          </button>
          <button>
            <DeleteOutlined />
          </button>
          <button>
            <MinusCircleOutlined />
          </button>
          <button>
            <HistoryOutlined />
          </button>
        </div>
      </div>

      <div className="chat-body">
        {selectedChat ? (
          <>
            <div className="message received">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="avatar-chat"
              />
              <div className="message-content">{selectedChat.message}</div>
            </div>
            <div className="message sent">
              <div className="message-content">Bạn có thể hỗ trợ gì không?</div>
            </div>
          </>
        ) : (
          <p className="no-chat">Hãy chọn một đoạn chat để bắt đầu</p>
        )}
      </div>

      <div className="chat-footer">
        <button>
          <PlusCircleOutlined />
        </button>
        <button>
          <PaperClipOutlined />
        </button>
        <button>
          <GifOutlined />
        </button>
        <button>
          <SmileOutlined />
        </button>
        <input className="chat-footer-input" type="text" placeholder="Aa" />
        <Button className="send-btn">
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
}
