export const config = {
  rsync: {
    envs: {
      prod: {
        dest: '/root/coverband/',
        host: ['root@68.183.42.122'],
        progress: true
      }
    },
    paths: {
      src: '.',
      root: 'dist'
    }
  }
};
