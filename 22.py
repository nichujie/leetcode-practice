class Solution(object):

    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        resultSet = set()

        def appendIfNew(arr, newS):
            if newS in resultSet:
                return
            arr.append(newS)
            resultSet.add(newS)

        result = [[], ['()']]
        resultSet.add('()')

        for i in range(2, n + 1):
            result.append([])
            for j in range(1, i):
                for s1 in result[j]:
                    for s2 in result[i-j]:
                        appendIfNew(result[i], s1 + s2)
                        appendIfNew(result[i], '(' * j + s2 + ')' * j)

        return result[n]
