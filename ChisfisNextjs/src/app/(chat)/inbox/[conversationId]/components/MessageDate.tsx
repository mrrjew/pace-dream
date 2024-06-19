"use client";

import { useMemo } from "react";
import Moment from "react-moment";

export const MessageDate = ({ date }: { date: Date }) => {
  const today = new Date();

  const isToday = useMemo(() => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }, [date]);

  const isYesterday = useMemo(() => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  }, [date]);

  if (isToday) {
    return (
      <span className="text-xs text-neutral-500">
        <Moment format="hh:mm A">{date}</Moment>
      </span>
    );
  }
  if (isYesterday) {
    return (
      <span className="text-xs text-neutral-500">
        Yesterday <Moment format="hh:mm A">{date}</Moment>
      </span>
    );
  }
  return (
    <span className="text-xs text-neutral-500">
      <Moment format="MMM DD hh:mm A">{date}</Moment>
    </span>
  );
};
