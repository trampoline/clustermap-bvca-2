// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10547__10548__auto__){var G__23009 = p1__10547__10548__auto__;if(G__23009)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__23009.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__23009.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23009);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23009);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__23010_SHARP_){return (cljs.core.val.call(null,p1__23010_SHARP_) > (1));
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
var vec__23012 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__23012,(0),null);var v = cljs.core.nth.call(null,vec__23012,(1),null);var p = vec__23012;if(cljs.core.truth_(p))
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
var ufv___23018 = schema.utils.use_fn_validation;var output_schema23013_23019 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema23014_23020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker23015_23021 = schema.core.checker.call(null,input_schema23014_23020);var output_checker23016_23022 = schema.core.checker.call(null,output_schema23013_23019);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___23018,output_schema23013_23019,input_schema23014_23020,input_checker23015_23021,output_checker23016_23022){
return (function unwrap_schema_form_key(G__23017){var validate__10517__auto__ = ufv___23018.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23017], null);var temp__4126__auto___23024 = input_checker23015_23021.call(null,args__10518__auto___23023);if(cljs.core.truth_(temp__4126__auto___23024))
{var error__10519__auto___23025 = temp__4126__auto___23024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___23025)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23014_23020,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23023,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23025], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__23017;while(true){
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
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23026 = output_checker23016_23022.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23026))
{var error__10519__auto___23027 = temp__4126__auto___23026;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___23027)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23013_23019,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23027], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23018,output_schema23013_23019,input_schema23014_23020,input_checker23015_23021,output_checker23016_23022))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema23013_23019,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23014_23020], null)));
var ufv___23033 = schema.utils.use_fn_validation;var output_schema23028_23034 = schema.core.Any;var input_schema23029_23035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker23030_23036 = schema.core.checker.call(null,input_schema23029_23035);var output_checker23031_23037 = schema.core.checker.call(null,output_schema23028_23034);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___23033,output_schema23028_23034,input_schema23029_23035,input_checker23030_23036,output_checker23031_23037){
return (function explicit_schema_key_map(G__23032){var validate__10517__auto__ = ufv___23033.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23032], null);var temp__4126__auto___23039 = input_checker23030_23036.call(null,args__10518__auto___23038);if(cljs.core.truth_(temp__4126__auto___23039))
{var error__10519__auto___23040 = temp__4126__auto___23039;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___23040)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23029_23035,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23038,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23040], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__23032;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23041 = output_checker23031_23037.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23041))
{var error__10519__auto___23042 = temp__4126__auto___23041;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___23042)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23028_23034,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23042], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23033,output_schema23028_23034,input_schema23029_23035,input_checker23030_23036,output_checker23031_23037))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema23028_23034,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23029_23035], null)));
var ufv___23048 = schema.utils.use_fn_validation;var output_schema23043_23049 = schema.core.Any;var input_schema23044_23050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker23045_23051 = schema.core.checker.call(null,input_schema23044_23050);var output_checker23046_23052 = schema.core.checker.call(null,output_schema23043_23049);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___23048,output_schema23043_23049,input_schema23044_23050,input_checker23045_23051,output_checker23046_23052){
return (function split_schema_keys(G__23047){var validate__10517__auto__ = ufv___23048.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23047], null);var temp__4126__auto___23054 = input_checker23045_23051.call(null,args__10518__auto___23053);if(cljs.core.truth_(temp__4126__auto___23054))
{var error__10519__auto___23055 = temp__4126__auto___23054;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___23055)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23044_23050,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23053,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23055], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__23047;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23056 = output_checker23046_23052.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23056))
{var error__10519__auto___23057 = temp__4126__auto___23056;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___23057)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23043_23049,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23057], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23048,output_schema23043_23049,input_schema23044_23050,input_checker23045_23051,output_checker23046_23052))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema23043_23049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23044_23050], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__23061){var vec__23062 = p__23061;var k = cljs.core.nth.call(null,vec__23062,(0),null);var v = cljs.core.nth.call(null,vec__23062,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__23063 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__23063,(0),null);var ov = cljs.core.nth.call(null,vec__23063,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__23064){
var key_project = cljs.core.first(arglist__23064);
arglist__23064 = cljs.core.next(arglist__23064);
var key_combine = cljs.core.first(arglist__23064);
arglist__23064 = cljs.core.next(arglist__23064);
var val_combine = cljs.core.first(arglist__23064);
var maps = cljs.core.rest(arglist__23064);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___23072 = schema.utils.use_fn_validation;var output_schema23066_23073 = plumbing.fnk.schema.InputSchema;var input_schema23067_23074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker23068_23075 = schema.core.checker.call(null,input_schema23067_23074);var output_checker23069_23076 = schema.core.checker.call(null,output_schema23066_23073);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076){
return (function union_input_schemata(G__23070,G__23071){var validate__10517__auto__ = ufv___23072.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23070,G__23071], null);var temp__4126__auto___23078 = input_checker23068_23075.call(null,args__10518__auto___23077);if(cljs.core.truth_(temp__4126__auto___23078))
{var error__10519__auto___23079 = temp__4126__auto___23078;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___23079)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23067_23074,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23077,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23079], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__23070;var i2 = G__23071;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10517__auto__,ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076){
return (function (p1__23065_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__23065_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__23065_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10517__auto__,ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076))
,((function (validate__10517__auto__,ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076){
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
});})(validate__10517__auto__,ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076))
,((function (validate__10517__auto__,ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10517__auto__,ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23080 = output_checker23069_23076.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23080))
{var error__10519__auto___23081 = temp__4126__auto___23080;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___23081)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23066_23073,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23081], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23072,output_schema23066_23073,input_schema23067_23074,input_checker23068_23075,output_checker23069_23076))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema23066_23073,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23067_23074], null)));
var ufv___23087 = schema.utils.use_fn_validation;var output_schema23082_23088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema23083_23089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker23084_23090 = schema.core.checker.call(null,input_schema23083_23089);var output_checker23085_23091 = schema.core.checker.call(null,output_schema23082_23088);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23087,output_schema23082_23088,input_schema23083_23089,input_checker23084_23090,output_checker23085_23091){
return (function required_toplevel_keys(G__23086){var validate__10517__auto__ = ufv___23087.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23086], null);var temp__4126__auto___23093 = input_checker23084_23090.call(null,args__10518__auto___23092);if(cljs.core.truth_(temp__4126__auto___23093))
{var error__10519__auto___23094 = temp__4126__auto___23093;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___23094)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23083_23089,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23092,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23094], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__23086;while(true){
return cljs.core.keep.call(null,((function (validate__10517__auto__,ufv___23087,output_schema23082_23088,input_schema23083_23089,input_checker23084_23090,output_checker23085_23091){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___23087,output_schema23082_23088,input_schema23083_23089,input_checker23084_23090,output_checker23085_23091))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23095 = output_checker23085_23091.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23095))
{var error__10519__auto___23096 = temp__4126__auto___23095;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___23096)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23082_23088,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23096], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23087,output_schema23082_23088,input_schema23083_23089,input_checker23084_23090,output_checker23085_23091))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema23082_23088,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23083_23089], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__23105(s__23106){return (new cljs.core.LazySeq(null,(function (){var s__23106__$1 = s__23106;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23106__$1);if(temp__4126__auto__)
{var s__23106__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23106__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23106__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23108 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23107 = (0);while(true){
if((i__23107 < size__4282__auto__))
{var vec__23111 = cljs.core._nth.call(null,c__4281__auto__,i__23107);var k = cljs.core.nth.call(null,vec__23111,(0),null);var v = cljs.core.nth.call(null,vec__23111,(1),null);cljs.core.chunk_append.call(null,b__23108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__23113 = (i__23107 + (1));
i__23107 = G__23113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23108),iter__23105.call(null,cljs.core.chunk_rest.call(null,s__23106__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23108),null);
}
} else
{var vec__23112 = cljs.core.first.call(null,s__23106__$2);var k = cljs.core.nth.call(null,vec__23112,(0),null);var v = cljs.core.nth.call(null,vec__23112,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__23105.call(null,cljs.core.rest.call(null,s__23106__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__23122(s__23123){return (new cljs.core.LazySeq(null,(function (){var s__23123__$1 = s__23123;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23123__$1);if(temp__4126__auto__)
{var s__23123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23123__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23123__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23125 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23124 = (0);while(true){
if((i__23124 < size__4282__auto__))
{var vec__23128 = cljs.core._nth.call(null,c__4281__auto__,i__23124);var k = cljs.core.nth.call(null,vec__23128,(0),null);var v = cljs.core.nth.call(null,vec__23128,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__23125,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__23130 = (i__23124 + (1));
i__23124 = G__23130;
continue;
}
} else
{{
var G__23131 = (i__23124 + (1));
i__23124 = G__23131;
continue;
}
}
} else
{{
var G__23132 = (i__23124 + (1));
i__23124 = G__23132;
continue;
}
}
} else
{{
var G__23133 = (i__23124 + (1));
i__23124 = G__23133;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23125),iter__23122.call(null,cljs.core.chunk_rest.call(null,s__23123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23125),null);
}
} else
{var vec__23129 = cljs.core.first.call(null,s__23123__$2);var k = cljs.core.nth.call(null,vec__23129,(0),null);var v = cljs.core.nth.call(null,vec__23129,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23122.call(null,cljs.core.rest.call(null,s__23123__$2)));
} else
{{
var G__23134 = cljs.core.rest.call(null,s__23123__$2);
s__23123__$1 = G__23134;
continue;
}
}
} else
{{
var G__23135 = cljs.core.rest.call(null,s__23123__$2);
s__23123__$1 = G__23135;
continue;
}
}
} else
{{
var G__23136 = cljs.core.rest.call(null,s__23123__$2);
s__23123__$1 = G__23136;
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
});return iter__4283__auto__.call(null,input_schema);
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
var ufv___23159 = schema.utils.use_fn_validation;var output_schema23137_23160 = schema.core.Any;var input_schema23138_23161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23139_23162 = schema.core.checker.call(null,input_schema23138_23161);var output_checker23140_23163 = schema.core.checker.call(null,output_schema23137_23160);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23159,output_schema23137_23160,input_schema23138_23161,input_checker23139_23162,output_checker23140_23163){
return (function compose_schemata(G__23141,G__23142){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___23164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23141,G__23142], null);var temp__4126__auto___23165 = input_checker23139_23162.call(null,args__10518__auto___23164);if(cljs.core.truth_(temp__4126__auto___23165))
{var error__10519__auto___23166 = temp__4126__auto___23165;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___23166)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23138_23161,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23164,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23166], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__23153 = G__23141;var vec__23155 = G__23153;var i2 = cljs.core.nth.call(null,vec__23155,(0),null);var o2 = cljs.core.nth.call(null,vec__23155,(1),null);var G__23154 = G__23142;var vec__23156 = G__23154;var i1 = cljs.core.nth.call(null,vec__23156,(0),null);var o1 = cljs.core.nth.call(null,vec__23156,(1),null);var G__23153__$1 = G__23153;var G__23154__$1 = G__23154;while(true){
var vec__23157 = G__23153__$1;var i2__$1 = cljs.core.nth.call(null,vec__23157,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23157,(1),null);var vec__23158 = G__23154__$1;var i1__$1 = cljs.core.nth.call(null,vec__23158,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23158,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___23167 = output_checker23140_23163.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23167))
{var error__10519__auto___23168 = temp__4126__auto___23167;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___23168)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23137_23160,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23168], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23159,output_schema23137_23160,input_schema23138_23161,input_checker23139_23162,output_checker23140_23163))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23137_23160,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23138_23161], null)));
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
var ufv___23247 = schema.utils.use_fn_validation;var output_schema23169_23248 = schema.core.Any;var input_schema23170_23249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker23171_23250 = schema.core.checker.call(null,input_schema23170_23249);var output_checker23172_23251 = schema.core.checker.call(null,output_schema23169_23248);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251){
return (function split_schema(G__23173,G__23174){var validate__10517__auto__ = ufv___23247.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23173,G__23174], null);var temp__4126__auto___23253 = input_checker23171_23250.call(null,args__10518__auto___23252);if(cljs.core.truth_(temp__4126__auto___23253))
{var error__10519__auto___23254 = temp__4126__auto___23253;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___23254)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23170_23249,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23252,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23254], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__23173;var ks = G__23174;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251){
return (function iter__23211(s__23212){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251){
return (function (){var s__23212__$1 = s__23212;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23212__$1);if(temp__4126__auto__)
{var s__23212__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23212__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23212__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23214 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23213 = (0);while(true){
if((i__23213 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__23213);cljs.core.chunk_append.call(null,b__23214,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__23213,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23214,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251){
return (function iter__23231(s__23232){return (new cljs.core.LazySeq(null,((function (i__23213,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23214,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251){
return (function (){var s__23232__$1 = s__23232;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23232__$1);if(temp__4126__auto____$1)
{var s__23232__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23232__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__23232__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__23234 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__23233 = (0);while(true){
if((i__23233 < size__4282__auto____$1))
{var vec__23237 = cljs.core._nth.call(null,c__4281__auto____$1,i__23233);var k = cljs.core.nth.call(null,vec__23237,(0),null);var v = cljs.core.nth.call(null,vec__23237,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23255 = (i__23233 + (1));
i__23233 = G__23255;
continue;
}
} else
{{
var G__23256 = (i__23233 + (1));
i__23233 = G__23256;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23234),iter__23231.call(null,cljs.core.chunk_rest.call(null,s__23232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23234),null);
}
} else
{var vec__23238 = cljs.core.first.call(null,s__23232__$2);var k = cljs.core.nth.call(null,vec__23238,(0),null);var v = cljs.core.nth.call(null,vec__23238,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23231.call(null,cljs.core.rest.call(null,s__23232__$2)));
} else
{{
var G__23257 = cljs.core.rest.call(null,s__23232__$2);
s__23232__$1 = G__23257;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__23213,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23214,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251))
,null,null));
});})(i__23213,in_QMARK_,c__4281__auto__,size__4282__auto__,b__23214,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__23258 = (i__23213 + (1));
i__23213 = G__23258;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23214),iter__23211.call(null,cljs.core.chunk_rest.call(null,s__23212__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23214),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__23212__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251){
return (function iter__23239(s__23240){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251){
return (function (){var s__23240__$1 = s__23240;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23240__$1);if(temp__4126__auto____$1)
{var s__23240__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23240__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23240__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23242 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23241 = (0);while(true){
if((i__23241 < size__4282__auto__))
{var vec__23245 = cljs.core._nth.call(null,c__4281__auto__,i__23241);var k = cljs.core.nth.call(null,vec__23245,(0),null);var v = cljs.core.nth.call(null,vec__23245,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23259 = (i__23241 + (1));
i__23241 = G__23259;
continue;
}
} else
{{
var G__23260 = (i__23241 + (1));
i__23241 = G__23260;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23242),iter__23239.call(null,cljs.core.chunk_rest.call(null,s__23240__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23242),null);
}
} else
{var vec__23246 = cljs.core.first.call(null,s__23240__$2);var k = cljs.core.nth.call(null,vec__23246,(0),null);var v = cljs.core.nth.call(null,vec__23246,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23239.call(null,cljs.core.rest.call(null,s__23240__$2)));
} else
{{
var G__23261 = cljs.core.rest.call(null,s__23240__$2);
s__23240__$1 = G__23261;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251))
,null,null));
});})(in_QMARK_,s__23212__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251))
;return iter__4283__auto__.call(null,s);
})()),iter__23211.call(null,cljs.core.rest.call(null,s__23212__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23262 = output_checker23172_23251.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23262))
{var error__10519__auto___23263 = temp__4126__auto___23262;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___23263)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23169_23248,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23263], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23247,output_schema23169_23248,input_schema23170_23249,input_checker23171_23250,output_checker23172_23251))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23169_23248,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23170_23249], null)));
var ufv___23294 = schema.utils.use_fn_validation;var output_schema23264_23295 = plumbing.fnk.schema.GraphIOSchemata;var input_schema23265_23296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23266_23297 = schema.core.checker.call(null,input_schema23265_23296);var output_checker23267_23298 = schema.core.checker.call(null,output_schema23264_23295);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23294,output_schema23264_23295,input_schema23265_23296,input_checker23266_23297,output_checker23267_23298){
return (function sequence_schemata(G__23268,G__23269){var validate__10517__auto__ = ufv___23294.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___23299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23268,G__23269], null);var temp__4126__auto___23300 = input_checker23266_23297.call(null,args__10518__auto___23299);if(cljs.core.truth_(temp__4126__auto___23300))
{var error__10519__auto___23301 = temp__4126__auto___23300;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___23301)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23265_23296,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___23299,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23301], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__23285 = G__23268;var vec__23287 = G__23285;var i1 = cljs.core.nth.call(null,vec__23287,(0),null);var o1 = cljs.core.nth.call(null,vec__23287,(1),null);var G__23286 = G__23269;var vec__23288 = G__23286;var k = cljs.core.nth.call(null,vec__23288,(0),null);var vec__23289 = cljs.core.nth.call(null,vec__23288,(1),null);var i2 = cljs.core.nth.call(null,vec__23289,(0),null);var o2 = cljs.core.nth.call(null,vec__23289,(1),null);var G__23285__$1 = G__23285;var G__23286__$1 = G__23286;while(true){
var vec__23290 = G__23285__$1;var i1__$1 = cljs.core.nth.call(null,vec__23290,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23290,(1),null);var vec__23291 = G__23286__$1;var k__$1 = cljs.core.nth.call(null,vec__23291,(0),null);var vec__23292 = cljs.core.nth.call(null,vec__23291,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__23292,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23292,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__23293 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__23293,(0),null);var unused = cljs.core.nth.call(null,vec__23293,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___23302 = output_checker23267_23298.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___23302))
{var error__10519__auto___23303 = temp__4126__auto___23302;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___23303)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23264_23295,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___23303], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___23294,output_schema23264_23295,input_schema23265_23296,input_checker23266_23297,output_checker23267_23298))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23264_23295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23265_23296], null)));
