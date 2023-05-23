const NepaliDateConverter = {
  ad2bs: (year, month, day) => {
    // Constants for conversion
    const nepaliYearOffset = 57;
    const nepaliMonthOffset = 9;
    const nepaliDayOffset = 16;

    // Calculate Nepali date
    const nepaliYear = year - nepaliYearOffset;
    const nepaliMonth = month - nepaliMonthOffset;
    const nepaliDay = day - nepaliDayOffset;

    return {
      nepaliYear,
      nepaliMonth,
      nepaliDay,
    };
  },

  bs2ad: (year, month, day) => {
    // Constants for conversion
    const nepaliYearOffset = 57;
    const nepaliMonthOffset = 9;
    const nepaliDayOffset = 16;

    // Calculate English date
    const englishYear = year + nepaliYearOffset;
    const englishMonth = month + nepaliMonthOffset;
    const englishDay = day + nepaliDayOffset;

    return {
      englishYear,
      englishMonth,
      englishDay,
    };
  },
};

export default NepaliDateConverter;
