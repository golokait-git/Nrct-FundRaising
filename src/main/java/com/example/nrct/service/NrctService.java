package com.example.nrct.service;

import com.example.nrct.model.NrctModel;
import com.example.nrct.repository.NrctRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
