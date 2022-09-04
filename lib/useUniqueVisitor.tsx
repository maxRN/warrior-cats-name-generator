import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { log } from "next-axiom";

export default function useUniqueVisitor() {
  const [visitorId, setVisitorId] = useState("");

  useEffect(() => {
    const visitorIdLocalStorage = localStorage.getItem("visitor-id");

    if (visitorIdLocalStorage) {
      setVisitorId(visitorIdLocalStorage);
      log.info("return visitor: ", { visitorId: visitorIdLocalStorage });
    } else {
      const visitorId = uuidv4();
      localStorage.setItem("visitor-id", visitorId);
      log.info("new user visited site", { visitorId: visitorId });
    }
  }, []);

  return visitorId;
}
