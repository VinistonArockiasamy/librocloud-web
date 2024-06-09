export class Utility {
  public static getNavigationUrl(notificationType?: string): string {
    if (notificationType) {
      return notificationType.toLocaleLowerCase().replace(/\s/g, '-');
    }
    return '';
  }

  public static getFormattedDate(currentDate: string) {
    const dateInput = new Date(currentDate);
    const month = dateInput.getMonth() + 1;
    const day = dateInput.getDate();
    const year = dateInput.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
