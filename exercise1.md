## Rust Linting, Testing, and Build Tools

---

### Linting

In Rust, the compiler gives a lot of linting checks. There are also linting tools such as rustfmt (stylistic errors), and clippy, for general linting. Clippy includes over 550 lints.

Clippy supports a number of levels in a variety of categories, so you can choose how much you want clippy to assist.

### Testing

Rust supports 3 styles of testing: unit testing, doc testing, and integration testing. You can use `cargo` to run tests.

Testing seems to be a first class citizen in Rust, as it is built right in.

### Builds

`Cargo` is also Rust's build tool. You can use the `cargo build` to create binaries.

### Continuous Integration

In addition to Jenkins, and GitHub Actions, you can also use GitLab CI. You can use Rust specific CI machines and then most of the CI testing/build is done via the `cargo` command just like if it was done manually.

It does not look like Azure DevOps pipelines has specific support for Rust, but you can roll your own with an ADO yaml pipeline.

I think cloud-based CI SaaS solutions are the way to go for most applications. Only if you needed something highly custom, or with an extreme amount of resources, or perhaps for highly sensative applications, would it make sense to self host your CI server or server pool.
