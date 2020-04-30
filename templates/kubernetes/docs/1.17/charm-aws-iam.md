---
wrapper_template: kubernetes/docs/base_docs.html
markdown_includes:
  nav: kubernetes/docs/shared/_side-navigation.md
context:
  title: 'Aws-iam charm '
  description: A charm that enables using AWS IAM to authenticate with Kubernetes
keywords: component, charms, versions, release
tags:
    - reference
sidebar: k8smain-sidebar
permalink: 1.17/charm-aws-iam.html
layout:
    - base
    - ubuntu-com
toc: false
charm_revision: '20'
bundle_release: '1.17'
---

The AWS IAM charm allows a Kubernetes cluster to be authenticated via the Amazon
API using AWS users and groups. The authorization falls to RBAC, so an Amazon
user or group maps to an RBAC user.

## Usage

The AWS IAM charm is subordinate to the [`kubernetes-master`]
(https://jaas.ai/u/containers/kubernetes-master)
charm and needs to be related to it. It will then set the Kubernetes API server
to authenticate through the AWS IAM pod deployed inside the cluster.

```
juju deploy cs:~containers/aws-iam
juju deploy charmed-kubernetes
juju add-relation aws-iam kubernetes-master
```


## Configuration

<!-- CONFIG STARTS -->
<!--AUTOGENERATED CONFIG TEXT - DO NOT EDIT -->


| name | type   | Default      | Description                               |
|------|--------|--------------|-------------------------------------------|
| <a id="table-image"> </a> image | string | [See notes](#image-default) | OCI Image to use for aws-iam-authentication.  |

---

### image


<a id="image-default"> </a>
**Default:**

```
rocks.canonical.com:5000/cdk/aws-iam-authenticator:v0.4.0_ck1
```


[Back to table](#table-image)



<!-- CONFIG ENDS -->






## Further information

- [AWS IAM Homepage](https://github.com/kubernetes-sigs/aws-iam-authenticator)
- [AWS IAM Charm Issue Tracker](https://launchpad.net/charm-aws-iam)
- [AWS IAM Issue Tracker](https://github.com/kubernetes-sigs/aws-iam-authenticator/issues)