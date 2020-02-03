def climbingLeaderboard(scores, alice):
    keys = list(dict.fromkeys(scores))

    result = []

    # for x in alice:
    #     if x < keys[-1]:
    #         result.append((len(keys) + 1))
    #     else:
    #         for i, y in enumerate (keys, start=1):
    #             if x >= y:
    #                 result.append(i)
    #                 break

    i = len(keys) - 1
    for x in alice:
        if x > keys[0]:
            result.append(1)
        else:
            if x < keys[i]:
                result.append(i + 2)
                break
            elif x == keys[i]:
                result.append(i + 1)
            else


            # for i, y in enumerate (keys, start=1):
            #     if x < keys[-i]:
            #         result.append(len(keys) + 2 - i)
            #         break

    return result

print(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))