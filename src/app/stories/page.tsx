import React from 'react';

import { HeroSection, WorkTogether } from '@/shared/components';
import { StorySection } from '@/components/Stories';
import { useFetch } from '@/shared/hook';
import { ICategory } from '@/shared/types/category';
import storiesHero from '@/assets/images/stories/stories-hero.png';

const Stories = async () => {
  const storyCategories = await useFetch({ url: '/story-categories', revalidateIn: 86400 });

  const storyCategoriesData = storyCategories?.data?.map((data: ICategory) => ({
    id: data.id, name: data.name, banner_image: data.banner_image, dataType: 'story'
  }));

  return (
    <>
      <HeroSection heroFor='story' titleOne='Stories' titleTwo='that Inspire' backgroundImage={storiesHero}/>
      <StorySection stroyCategories={storyCategoriesData}/>
      <WorkTogether/>
    </>
  );
};

export default Stories;
