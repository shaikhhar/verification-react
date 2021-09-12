const auth = {
    isAuthenticated:false,
    async login(code) {
      const res = await fetch(`/verify?code=${code}`, {method: 'POST'});
      if(res.status === 200) this.isAuthenticated = true;
    }
  }

export default auth;