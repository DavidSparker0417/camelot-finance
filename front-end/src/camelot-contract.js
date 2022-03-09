import { dsUtilGenerateRandomNumber } from "./ds-lib/ds-utils";
const TESTING = true

export async function queryCamelotInfo() {
  let tower
  let camelot
  let holds = new Array
  if (TESTING == true)
  {
    tower = {
      nodes   : dsUtilGenerateRandomNumber(1, 50).toFixed(0),
      rewards : dsUtilGenerateRandomNumber(100, 9999).toFixed(2),
      money   : dsUtilGenerateRandomNumber(1000, 3000).toFixed(2)
    }
    camelot = {
      nodes               : dsUtilGenerateRandomNumber(1, 50).toFixed(0),
      treasury            : dsUtilGenerateRandomNumber(10000, 99999999).toFixed(2),
      tokensInRewardPool  : dsUtilGenerateRandomNumber(900, 10000).toFixed(2),
      marketCap           : dsUtilGenerateRandomNumber(100000, 1000000000).toFixed(2)
    }

    for(let i = 0; i < 5; i ++)
      holds.push(
        {
          count   : dsUtilGenerateRandomNumber(0, 10).toFixed(0),
          pending : dsUtilGenerateRandomNumber(0, 2) > 1 ? true : false
        }
      )
  }

  return {
    tower   : tower,
    camelot : camelot,
    holds   : holds
  }
}