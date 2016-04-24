/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.aksw.simba.semanticsim;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;

/**
 *
 * @author DiegoMoussallem
 */
public class SemanticSimilarity {
    
    public String SemSim1xN(String uri) throws IOException {
        
        Sparql sparql = new Sparql();

        List<String> resourcesSim = sparql.SparqlSimilar(uri);

        List<ValuesTemp> Listtemp = new ArrayList<>();

        double result = 0;
        for (int i = 1; i < 100; i++) {
            
            result = sparql.SemSim(uri, resourcesSim.get(i));
            
            ValuesTemp temp = new ValuesTemp();

            temp.setEntity(uri);
            temp.setEntity2(resourcesSim.get(i));
            temp.setSimilarity(result);

            Listtemp.add(temp);

            //System.out.println("Done");
            
        }
         Collections.sort(Listtemp);

        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(Listtemp);
    }

}
