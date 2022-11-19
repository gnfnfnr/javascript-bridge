const { PRINTSTARTGAME } = require('../constant/Message');
const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 개임 시작 문구
   */
  printStart() {
    return PRINTSTARTGAME;
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveAbleInfo) {
    ['U', 'D'].forEach((x) => Console.print(`[ ${this.moveMatch(moveAbleInfo, x).join(' | ')} ]`));
  },

  moveMatch(arr, keyword) {
    return arr.map(({ move, moveable }) => {
      const moveChar = moveable ? 'O' : 'X';
      return move === keyword ? moveChar : ' ';
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(sucess, totalTry, match) {
    Console.print('최종 게임 결과');
    this.printMap(match);
    Console.print(`게임 성공 여부: ${sucess ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${totalTry}`);
    Console.close();
  },
};

module.exports = OutputView;
