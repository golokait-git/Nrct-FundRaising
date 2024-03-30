package com.example.nrct.repository;

import com.example.nrct.model.NrctModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NrctRepository extends JpaRepository<NrctModel, Long> {
}
