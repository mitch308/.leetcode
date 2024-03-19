/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */

// 1.回溯法
function solveSudoku(board: string[][]): void {
  const line: boolean[][] = new Array(9).fill(null).map(() => new Array(9).fill(false))
  const column: boolean[][] = new Array(9).fill(null).map(() => new Array(9).fill(false))
  const block: boolean[][][] = new Array(3).fill(null).map(() => new Array(3).fill(null).map(() => new Array(9).fill(false)))
  let valid: boolean = false
  const spaces: number[][] = []

  function dfs(pos: number) {
    if (pos === spaces.length) {
      valid = true
      return
    }
    const [i, j] = spaces[pos]
    for (let k = 0; k < 9; k++) {
      if (!line[i][k] && !column[j][k] && !block[Math.floor(i / 3)][Math.floor(j / 3)][k]) {
        line[i][k] = true
        column[j][k] = true
        block[Math.floor(i / 3)][Math.floor(j / 3)][k] = true
        board[i][j] = String(k + 1)
        dfs(pos + 1)
        line[i][k] = false
        column[j][k] = false
        block[Math.floor(i / 3)][Math.floor(j / 3)][k] = false
      }
      if (valid) return
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        spaces.push([i, j])
      } else {
        const k = Number(board[i][j]) - 1
        line[i][k] = true
        column[j][k] = true
        block[Math.floor(i / 3)][Math.floor(j / 3)][k] = true
      }
    }
  }
  dfs(0)
};
const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
solveSudoku(board)
console.log(board)
// @lc code=end

