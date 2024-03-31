package com.nrct.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nrct.model.NrctModel;
import com.nrct.repository.NrctRepository;

@Service
public class NrctService {

    private final NrctRepository nrctRepository;

    @Autowired
    public NrctService(NrctRepository nrctRepository) {
        this.nrctRepository = nrctRepository;
    }

    public List<NrctModel> getAllNrctModels() {
        return nrctRepository.findAll();
    }

    public NrctModel getNrctModelById(Long id) {
        Optional<NrctModel> nrctModelOptional = nrctRepository.findById(id);
        return nrctModelOptional.orElse(null);
    }

    public NrctModel createOrUpdateNrctModel(NrctModel nrctModel) {
        return nrctRepository.save(nrctModel);
    }

    public void deleteNrctModel(Long id) {
        nrctRepository.deleteById(id);
    }
}
