import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Message = {
    id : Nat;
    sender : Principal;
    content : Text;
    timestamp : Int;
  };

  type ChatSession = {
    id : Nat;
    owner : Principal;
    messages : List.List<Message>;
  };

  let sessions = List.empty<ChatSession>();

  public shared ({ caller }) func startSession() : async Nat {
    let sessionId = sessions.size();
    let newSession : ChatSession = {
      id = sessionId;
      owner = caller;
      messages = List.empty<Message>();
    };
    sessions.add(newSession);
    sessionId;
  };

  public shared ({ caller }) func sendMessage(sessionId : Nat, content : Text) : async () {
    if (sessionId >= sessions.size()) { Runtime.trap("Session does not exist") };
    let sessionArray = sessions.toArray();
    let sessionCopy = List.empty<ChatSession>();
    for (i in sessionArray.keys()) {
      if (i == sessionId) {
        let messageId = sessionArray[i].messages.size();
        let newMessage : Message = {
          id = messageId;
          sender = caller;
          content;
          timestamp = 0;
        };
        sessionCopy.add({
          id = sessionArray[i].id;
          owner = sessionArray[i].owner;
          messages = sessionArray[i].messages;
        });
        sessionArray[i].messages.add(newMessage);
      } else {
        sessionCopy.add(sessionArray[i]);
      };
    };
    sessions.clear();
    sessions.addAll(sessionCopy.values());
  };

  public query ({ caller }) func getMessages(sessionId : Nat) : async [Message] {
    if (sessionId >= sessions.size()) { Runtime.trap("Session does not exist") };
    sessions.toArray()[sessionId].messages.toArray();
  };
};
