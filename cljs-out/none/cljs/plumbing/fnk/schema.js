// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13098__13099__auto__){var G__91329 = p1__13098__13099__auto__;if(G__91329)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__91329.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__91329.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__91329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__91329);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__91330_SHARP_){return (cljs.core.val.call(null,p1__91330_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__91332 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__91332,(0),null);var v = cljs.core.nth.call(null,vec__91332,(1),null);var p = vec__91332;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___91338 = schema.utils.use_fn_validation;var output_schema91333_91339 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema91334_91340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker91335_91341 = schema.core.checker.call(null,input_schema91334_91340);var output_checker91336_91342 = schema.core.checker.call(null,output_schema91333_91339);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___91338,output_schema91333_91339,input_schema91334_91340,input_checker91335_91341,output_checker91336_91342){
return (function unwrap_schema_form_key(G__91337){var validate__13068__auto__ = ufv___91338.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___91343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91337], null);var temp__4126__auto___91344 = input_checker91335_91341.call(null,args__13069__auto___91343);if(cljs.core.truth_(temp__4126__auto___91344))
{var error__13070__auto___91345 = temp__4126__auto___91344;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13070__auto___91345)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91334_91340,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91343,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91345], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var k = G__91337;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___91346 = output_checker91336_91342.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91346))
{var error__13070__auto___91347 = temp__4126__auto___91346;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13070__auto___91347)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91333_91339,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91347], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91338,output_schema91333_91339,input_schema91334_91340,input_checker91335_91341,output_checker91336_91342))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema91333_91339,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91334_91340], null)));
var ufv___91353 = schema.utils.use_fn_validation;var output_schema91348_91354 = schema.core.Any;var input_schema91349_91355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker91350_91356 = schema.core.checker.call(null,input_schema91349_91355);var output_checker91351_91357 = schema.core.checker.call(null,output_schema91348_91354);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___91353,output_schema91348_91354,input_schema91349_91355,input_checker91350_91356,output_checker91351_91357){
return (function explicit_schema_key_map(G__91352){var validate__13068__auto__ = ufv___91353.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___91358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91352], null);var temp__4126__auto___91359 = input_checker91350_91356.call(null,args__13069__auto___91358);if(cljs.core.truth_(temp__4126__auto___91359))
{var error__13070__auto___91360 = temp__4126__auto___91359;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13070__auto___91360)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91349_91355,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91358,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91360], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__91352;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___91361 = output_checker91351_91357.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91361))
{var error__13070__auto___91362 = temp__4126__auto___91361;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13070__auto___91362)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91348_91354,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91362], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91353,output_schema91348_91354,input_schema91349_91355,input_checker91350_91356,output_checker91351_91357))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema91348_91354,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91349_91355], null)));
var ufv___91368 = schema.utils.use_fn_validation;var output_schema91363_91369 = schema.core.Any;var input_schema91364_91370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker91365_91371 = schema.core.checker.call(null,input_schema91364_91370);var output_checker91366_91372 = schema.core.checker.call(null,output_schema91363_91369);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___91368,output_schema91363_91369,input_schema91364_91370,input_checker91365_91371,output_checker91366_91372){
return (function split_schema_keys(G__91367){var validate__13068__auto__ = ufv___91368.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___91373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91367], null);var temp__4126__auto___91374 = input_checker91365_91371.call(null,args__13069__auto___91373);if(cljs.core.truth_(temp__4126__auto___91374))
{var error__13070__auto___91375 = temp__4126__auto___91374;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13070__auto___91375)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91364_91370,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91373,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91375], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__91367;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___91376 = output_checker91366_91372.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91376))
{var error__13070__auto___91377 = temp__4126__auto___91376;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13070__auto___91377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91363_91369,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91377], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91368,output_schema91363_91369,input_schema91364_91370,input_checker91365_91371,output_checker91366_91372))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema91363_91369,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91364_91370], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__91381){var vec__91382 = p__91381;var k = cljs.core.nth.call(null,vec__91382,(0),null);var v = cljs.core.nth.call(null,vec__91382,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__91383 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__91383,(0),null);var ov = cljs.core.nth.call(null,vec__91383,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__91384){
var key_project = cljs.core.first(arglist__91384);
arglist__91384 = cljs.core.next(arglist__91384);
var key_combine = cljs.core.first(arglist__91384);
arglist__91384 = cljs.core.next(arglist__91384);
var val_combine = cljs.core.first(arglist__91384);
var maps = cljs.core.rest(arglist__91384);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___91392 = schema.utils.use_fn_validation;var output_schema91386_91393 = plumbing.fnk.schema.InputSchema;var input_schema91387_91394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker91388_91395 = schema.core.checker.call(null,input_schema91387_91394);var output_checker91389_91396 = schema.core.checker.call(null,output_schema91386_91393);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396){
return (function union_input_schemata(G__91390,G__91391){var validate__13068__auto__ = ufv___91392.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___91397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91390,G__91391], null);var temp__4126__auto___91398 = input_checker91388_91395.call(null,args__13069__auto___91397);if(cljs.core.truth_(temp__4126__auto___91398))
{var error__13070__auto___91399 = temp__4126__auto___91398;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13070__auto___91399)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91387_91394,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91397,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91399], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var i1 = G__91390;var i2 = G__91391;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13068__auto__,ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396){
return (function (p1__91385_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__91385_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__91385_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13068__auto__,ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396))
,((function (validate__13068__auto__,ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__13068__auto__,ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396))
,((function (validate__13068__auto__,ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13068__auto__,ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___91400 = output_checker91389_91396.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91400))
{var error__13070__auto___91401 = temp__4126__auto___91400;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13070__auto___91401)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91386_91393,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91401], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91392,output_schema91386_91393,input_schema91387_91394,input_checker91388_91395,output_checker91389_91396))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema91386_91393,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91387_91394], null)));
var ufv___91407 = schema.utils.use_fn_validation;var output_schema91402_91408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema91403_91409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker91404_91410 = schema.core.checker.call(null,input_schema91403_91409);var output_checker91405_91411 = schema.core.checker.call(null,output_schema91402_91408);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___91407,output_schema91402_91408,input_schema91403_91409,input_checker91404_91410,output_checker91405_91411){
return (function required_toplevel_keys(G__91406){var validate__13068__auto__ = ufv___91407.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___91412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91406], null);var temp__4126__auto___91413 = input_checker91404_91410.call(null,args__13069__auto___91412);if(cljs.core.truth_(temp__4126__auto___91413))
{var error__13070__auto___91414 = temp__4126__auto___91413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13070__auto___91414)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91403_91409,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91412,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91414], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var input_schema = G__91406;while(true){
return cljs.core.keep.call(null,((function (validate__13068__auto__,ufv___91407,output_schema91402_91408,input_schema91403_91409,input_checker91404_91410,output_checker91405_91411){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13068__auto__,ufv___91407,output_schema91402_91408,input_schema91403_91409,input_checker91404_91410,output_checker91405_91411))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___91415 = output_checker91405_91411.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91415))
{var error__13070__auto___91416 = temp__4126__auto___91415;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13070__auto___91416)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91402_91408,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91416], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91407,output_schema91402_91408,input_schema91403_91409,input_checker91404_91410,output_checker91405_91411))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema91402_91408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91403_91409], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__91425(s__91426){return (new cljs.core.LazySeq(null,(function (){var s__91426__$1 = s__91426;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91426__$1);if(temp__4126__auto__)
{var s__91426__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91426__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91426__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91428 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91427 = (0);while(true){
if((i__91427 < size__4374__auto__))
{var vec__91431 = cljs.core._nth.call(null,c__4373__auto__,i__91427);var k = cljs.core.nth.call(null,vec__91431,(0),null);var v = cljs.core.nth.call(null,vec__91431,(1),null);cljs.core.chunk_append.call(null,b__91428,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__91433 = (i__91427 + (1));
i__91427 = G__91433;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91428),iter__91425.call(null,cljs.core.chunk_rest.call(null,s__91426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91428),null);
}
} else
{var vec__91432 = cljs.core.first.call(null,s__91426__$2);var k = cljs.core.nth.call(null,vec__91432,(0),null);var v = cljs.core.nth.call(null,vec__91432,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__91425.call(null,cljs.core.rest.call(null,s__91426__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__91442(s__91443){return (new cljs.core.LazySeq(null,(function (){var s__91443__$1 = s__91443;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91443__$1);if(temp__4126__auto__)
{var s__91443__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91443__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91443__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91445 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91444 = (0);while(true){
if((i__91444 < size__4374__auto__))
{var vec__91448 = cljs.core._nth.call(null,c__4373__auto__,i__91444);var k = cljs.core.nth.call(null,vec__91448,(0),null);var v = cljs.core.nth.call(null,vec__91448,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__91445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__91450 = (i__91444 + (1));
i__91444 = G__91450;
continue;
}
} else
{{
var G__91451 = (i__91444 + (1));
i__91444 = G__91451;
continue;
}
}
} else
{{
var G__91452 = (i__91444 + (1));
i__91444 = G__91452;
continue;
}
}
} else
{{
var G__91453 = (i__91444 + (1));
i__91444 = G__91453;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91445),iter__91442.call(null,cljs.core.chunk_rest.call(null,s__91443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91445),null);
}
} else
{var vec__91449 = cljs.core.first.call(null,s__91443__$2);var k = cljs.core.nth.call(null,vec__91449,(0),null);var v = cljs.core.nth.call(null,vec__91449,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__91442.call(null,cljs.core.rest.call(null,s__91443__$2)));
} else
{{
var G__91454 = cljs.core.rest.call(null,s__91443__$2);
s__91443__$1 = G__91454;
continue;
}
}
} else
{{
var G__91455 = cljs.core.rest.call(null,s__91443__$2);
s__91443__$1 = G__91455;
continue;
}
}
} else
{{
var G__91456 = cljs.core.rest.call(null,s__91443__$2);
s__91443__$1 = G__91456;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___91479 = schema.utils.use_fn_validation;var output_schema91457_91480 = schema.core.Any;var input_schema91458_91481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker91459_91482 = schema.core.checker.call(null,input_schema91458_91481);var output_checker91460_91483 = schema.core.checker.call(null,output_schema91457_91480);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___91479,output_schema91457_91480,input_schema91458_91481,input_checker91459_91482,output_checker91460_91483){
return (function compose_schemata(G__91461,G__91462){var validate__13068__auto__ = true;if(validate__13068__auto__)
{var args__13069__auto___91484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91461,G__91462], null);var temp__4126__auto___91485 = input_checker91459_91482.call(null,args__13069__auto___91484);if(cljs.core.truth_(temp__4126__auto___91485))
{var error__13070__auto___91486 = temp__4126__auto___91485;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13070__auto___91486)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91458_91481,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91484,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91486], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__91473 = G__91461;var vec__91475 = G__91473;var i2 = cljs.core.nth.call(null,vec__91475,(0),null);var o2 = cljs.core.nth.call(null,vec__91475,(1),null);var G__91474 = G__91462;var vec__91476 = G__91474;var i1 = cljs.core.nth.call(null,vec__91476,(0),null);var o1 = cljs.core.nth.call(null,vec__91476,(1),null);var G__91473__$1 = G__91473;var G__91474__$1 = G__91474;while(true){
var vec__91477 = G__91473__$1;var i2__$1 = cljs.core.nth.call(null,vec__91477,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__91477,(1),null);var vec__91478 = G__91474__$1;var i1__$1 = cljs.core.nth.call(null,vec__91478,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__91478,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13068__auto__)
{var temp__4126__auto___91487 = output_checker91460_91483.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91487))
{var error__13070__auto___91488 = temp__4126__auto___91487;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13070__auto___91488)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91457_91480,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91488], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91479,output_schema91457_91480,input_schema91458_91481,input_checker91459_91482,output_checker91460_91483))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema91457_91480,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91458_91481], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___91567 = schema.utils.use_fn_validation;var output_schema91489_91568 = schema.core.Any;var input_schema91490_91569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker91491_91570 = schema.core.checker.call(null,input_schema91490_91569);var output_checker91492_91571 = schema.core.checker.call(null,output_schema91489_91568);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571){
return (function split_schema(G__91493,G__91494){var validate__13068__auto__ = ufv___91567.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___91572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91493,G__91494], null);var temp__4126__auto___91573 = input_checker91491_91570.call(null,args__13069__auto___91572);if(cljs.core.truth_(temp__4126__auto___91573))
{var error__13070__auto___91574 = temp__4126__auto___91573;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13070__auto___91574)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91490_91569,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91572,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91574], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var s = G__91493;var ks = G__91494;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4375__auto__ = ((function (ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571){
return (function iter__91531(s__91532){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571){
return (function (){var s__91532__$1 = s__91532;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91532__$1);if(temp__4126__auto__)
{var s__91532__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91532__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91532__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91534 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91533 = (0);while(true){
if((i__91533 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4373__auto__,i__91533);cljs.core.chunk_append.call(null,b__91534,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__91533,in_QMARK_,c__4373__auto__,size__4374__auto__,b__91534,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571){
return (function iter__91551(s__91552){return (new cljs.core.LazySeq(null,((function (i__91533,in_QMARK_,c__4373__auto__,size__4374__auto__,b__91534,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571){
return (function (){var s__91552__$1 = s__91552;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__91552__$1);if(temp__4126__auto____$1)
{var s__91552__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__91552__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first.call(null,s__91552__$2);var size__4374__auto____$1 = cljs.core.count.call(null,c__4373__auto____$1);var b__91554 = cljs.core.chunk_buffer.call(null,size__4374__auto____$1);if((function (){var i__91553 = (0);while(true){
if((i__91553 < size__4374__auto____$1))
{var vec__91557 = cljs.core._nth.call(null,c__4373__auto____$1,i__91553);var k = cljs.core.nth.call(null,vec__91557,(0),null);var v = cljs.core.nth.call(null,vec__91557,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__91554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__91575 = (i__91553 + (1));
i__91553 = G__91575;
continue;
}
} else
{{
var G__91576 = (i__91553 + (1));
i__91553 = G__91576;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91554),iter__91551.call(null,cljs.core.chunk_rest.call(null,s__91552__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91554),null);
}
} else
{var vec__91558 = cljs.core.first.call(null,s__91552__$2);var k = cljs.core.nth.call(null,vec__91558,(0),null);var v = cljs.core.nth.call(null,vec__91558,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__91551.call(null,cljs.core.rest.call(null,s__91552__$2)));
} else
{{
var G__91577 = cljs.core.rest.call(null,s__91552__$2);
s__91552__$1 = G__91577;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__91533,in_QMARK_,c__4373__auto__,size__4374__auto__,b__91534,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571))
,null,null));
});})(i__91533,in_QMARK_,c__4373__auto__,size__4374__auto__,b__91534,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571))
;return iter__4375__auto__.call(null,s);
})()));
{
var G__91578 = (i__91533 + (1));
i__91533 = G__91578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91534),iter__91531.call(null,cljs.core.chunk_rest.call(null,s__91532__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91534),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__91532__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571){
return (function iter__91559(s__91560){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571){
return (function (){var s__91560__$1 = s__91560;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__91560__$1);if(temp__4126__auto____$1)
{var s__91560__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__91560__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91560__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91562 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91561 = (0);while(true){
if((i__91561 < size__4374__auto__))
{var vec__91565 = cljs.core._nth.call(null,c__4373__auto__,i__91561);var k = cljs.core.nth.call(null,vec__91565,(0),null);var v = cljs.core.nth.call(null,vec__91565,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__91562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__91579 = (i__91561 + (1));
i__91561 = G__91579;
continue;
}
} else
{{
var G__91580 = (i__91561 + (1));
i__91561 = G__91580;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91562),iter__91559.call(null,cljs.core.chunk_rest.call(null,s__91560__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91562),null);
}
} else
{var vec__91566 = cljs.core.first.call(null,s__91560__$2);var k = cljs.core.nth.call(null,vec__91566,(0),null);var v = cljs.core.nth.call(null,vec__91566,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__91559.call(null,cljs.core.rest.call(null,s__91560__$2)));
} else
{{
var G__91581 = cljs.core.rest.call(null,s__91560__$2);
s__91560__$1 = G__91581;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571))
,null,null));
});})(in_QMARK_,s__91532__$2,temp__4126__auto__,ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571))
;return iter__4375__auto__.call(null,s);
})()),iter__91531.call(null,cljs.core.rest.call(null,s__91532__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571))
,null,null));
});})(ks__$1,validate__13068__auto__,ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571))
;return iter__4375__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___91582 = output_checker91492_91571.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91582))
{var error__13070__auto___91583 = temp__4126__auto___91582;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13070__auto___91583)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91489_91568,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91583], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91567,output_schema91489_91568,input_schema91490_91569,input_checker91491_91570,output_checker91492_91571))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema91489_91568,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91490_91569], null)));
var ufv___91614 = schema.utils.use_fn_validation;var output_schema91584_91615 = plumbing.fnk.schema.GraphIOSchemata;var input_schema91585_91616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker91586_91617 = schema.core.checker.call(null,input_schema91585_91616);var output_checker91587_91618 = schema.core.checker.call(null,output_schema91584_91615);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___91614,output_schema91584_91615,input_schema91585_91616,input_checker91586_91617,output_checker91587_91618){
return (function sequence_schemata(G__91588,G__91589){var validate__13068__auto__ = ufv___91614.get_cell();if(cljs.core.truth_(validate__13068__auto__))
{var args__13069__auto___91619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__91588,G__91589], null);var temp__4126__auto___91620 = input_checker91586_91617.call(null,args__13069__auto___91619);if(cljs.core.truth_(temp__4126__auto___91620))
{var error__13070__auto___91621 = temp__4126__auto___91620;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13070__auto___91621)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema91585_91616,new cljs.core.Keyword(null,"value","value",305978217),args__13069__auto___91619,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91621], null));
} else
{}
} else
{}
var o__13071__auto__ = (function (){var G__91605 = G__91588;var vec__91607 = G__91605;var i1 = cljs.core.nth.call(null,vec__91607,(0),null);var o1 = cljs.core.nth.call(null,vec__91607,(1),null);var G__91606 = G__91589;var vec__91608 = G__91606;var k = cljs.core.nth.call(null,vec__91608,(0),null);var vec__91609 = cljs.core.nth.call(null,vec__91608,(1),null);var i2 = cljs.core.nth.call(null,vec__91609,(0),null);var o2 = cljs.core.nth.call(null,vec__91609,(1),null);var G__91605__$1 = G__91605;var G__91606__$1 = G__91606;while(true){
var vec__91610 = G__91605__$1;var i1__$1 = cljs.core.nth.call(null,vec__91610,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__91610,(1),null);var vec__91611 = G__91606__$1;var k__$1 = cljs.core.nth.call(null,vec__91611,(0),null);var vec__91612 = cljs.core.nth.call(null,vec__91611,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__91612,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__91612,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__91613 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__91613,(0),null);var unused = cljs.core.nth.call(null,vec__91613,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13068__auto__))
{var temp__4126__auto___91622 = output_checker91587_91618.call(null,o__13071__auto__);if(cljs.core.truth_(temp__4126__auto___91622))
{var error__13070__auto___91623 = temp__4126__auto___91622;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13070__auto___91623)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema91584_91615,new cljs.core.Keyword(null,"value","value",305978217),o__13071__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13070__auto___91623], null));
} else
{}
} else
{}
return o__13071__auto__;
});})(ufv___91614,output_schema91584_91615,input_schema91585_91616,input_checker91586_91617,output_checker91587_91618))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema91584_91615,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema91585_91616], null)));

//# sourceMappingURL=schema.js.map