// filepath: /birthday-greeting-app/birthday-greeting-app/src/utils/index.ts

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatGreetingMessage = (name: string, message: string): string => {
  return `亲爱的 ${name}，祝你生日快乐！${message}`;
};