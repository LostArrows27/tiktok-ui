import * as request from '~/utils/httpReques';
export const searchUser = async (q, type = 'less') => {
  try {
    const response = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

