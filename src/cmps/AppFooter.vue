<template>
  <footer class="app-footer">
    <p>Coffeerights 2023</p>
    <div class="social-links">
      <!-- <a href="https://www.linkedin.com/in/noam-green-3b597927b/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a> -->
      <a
        href="https://github.com/TediM98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://www.facebook.com/tedi.marunchack"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-facebook"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
}

.social-links a {
  margin-right: 0.5rem;
  padding: 4px;
  font-size: 19px;
  color: rgb(248, 173, 93);

  &:hover {
    color: rgb(255, 132, 0);
  }
}

.bitcoin-info {
  display: flex;
  align-items: center;
}

.bitcoin-info i {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
