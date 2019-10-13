import AnswerSheet from '../answer-sheet'

describe('AnswerSheet', () => {
  describe('#correctAnswers', () => {
    it('正解した回答を返却すること', () => {
      const dummyMasterData = createDummyMasterData()
      const subject = new AnswerSheet(null, dummyMasterData)
      subject.saveAnswer(1, 1)
      expect(subject.correctAnswers().length).toBe(1)
    })
  })
})

function createDummyMasterData() {
  const dummyQuestion = {
    isCorrect: jest.fn(x => true)
  }
  const dummyMasterData = {
    find: jest.fn(x => dummyQuestion)
  }
  return dummyMasterData
}
