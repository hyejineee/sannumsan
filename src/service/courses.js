import climbingCourses from 'data/courses';

import {
  exist,
} from 'utils/utils';

export function findClimbingCourses({
  region, level, season, activity,
}) {
  if (!(region && level && season && activity)) {
    return [];
  }

  const hasRegion = exist(region);
  const hasDifficulty = exist({
    '초보자': '하',
    '중급자': '중',
    '상급자': '상',
  }[level]);
  const hasSeason = exist(season);
  const hasActivity = exist(activity);

  return climbingCourses.filter((course) => hasRegion(Object.values(course))
    && hasDifficulty(Object.values(course))
    && hasSeason(course.seasons)
    && hasActivity(course.activities));
}

// delete this
export const xxx = '';
