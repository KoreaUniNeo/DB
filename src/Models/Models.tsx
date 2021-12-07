export interface UserState {
    user: IUser[];
  }
  
  export interface IUser {
    Uid: string;
    user_name: string;
    user_email: string;
    valid: number;
  }
  
  export interface ProfileState {
    profile: IUserProfile[];
  }
  
  export interface IUserProfile { 
    user_name: string;
    user_uid: number;
    user_project: number[];
    like_project: number[];
    like_contest: number[];
    like_insight: number[];
    like_user: string[];
    user_onoff: number;
    user_region: number;
    user_role: string[][];
    user_role2: string[][];
    user_birthday: string;
    user_tags: string[];
    user_introduce: string;
    user_profile: string;
    user_age: number;
    user_univ: boolean;
    user_point: number;
    premium_project: number[];
    tel: string[];
    user_email: string;
    user_avatar: string;
  }
  
  export interface ProjectState {
    project: IProject[];
  }
  
  export interface IProject {
    Uid: number;
    writer_id: number;
    title: string;
    writedate: Date;
    teamname: string;
    teamnum: number;
    tags: string[];
    step: number;
    area: number;
    wantrole: string[][];
    projectdetail: string;
    wantdetail: string;
    likenum: number;
    like_user: number[];
    seennum: number;
    member_id: number[];
    imgurl: string;
    premium_user: number[];
    premium: boolean;
    premium_text: string;
    premium_valid: number;
  }
  
  export interface ContestState {
    contest: IContestcard[];
  }
  
  export interface IContestcard {
    Uid: number;
    name: string;
    start: string;
    finish: string;
    int: string;
    url: string;
    imgurl: string;
    like_user: string[];
  }
  
  export interface InsightState {
    insight: IInsightcard[];
  }
  
  export interface IInsightcard {
    uid: number;
    name: string;
    int: string;
    url: string;
    like_user: string[];
    imgurl: string;
    content_type: string;
    writer: string;
  }
  
  export interface LoginId {
    currentuser_id: any;
  }

  export interface MovieItem{
      img:string;
      title:string;
      content:string;
      run_time:string;
  }