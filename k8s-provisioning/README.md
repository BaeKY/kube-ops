# k8s-provisioning

> [[Github] Just me and open-source - kubernetes](https://github.com/justmeandopensource/kubernetes/tree/master/vagrant-provisioning)에서 가져왔다.
>
> 설치를 완료하면 [chart/manifest](../chart/manifest)의 manifest들을 설치한다.

## Requirements

- [Vagrant](https://www.vagrantup.com/)
- [VMware Fusion](https://www.vmware.com/products/fusion.html) - 방문하여 설치 & 개인 라인선스로 등록한다.

```Bash
brew install vagrant vagrant-vmware-utility
vagrant plugin install vagrant-vmware-desktop
```

## 클러스터 생성

```Bash
vagrant up --provider=vmware_desktop
```

## .kube/config

호스트 머신에서 kubectl을 사용하기 위해 `kmaster`에 있는 .kube/config 파일을 가져온다.

```Bash
# 호스트 머신에서 수행
mkdir ~/.kube
scp root@172.16.16.100:/etc/kubernetes/admin.conf ~/.kube/config
# password: kubeadmin
```

## 클러스터 삭제

```Bash
vagrant destroy -f
```
