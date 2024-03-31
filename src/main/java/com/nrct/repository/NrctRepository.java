package com.nrct.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nrct.model.NrctModel;

@Repository
public interface NrctRepository extends JpaRepository<NrctModel, Long> {
}
