// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10547__10548__auto__){var G__67074 = p1__10547__10548__auto__;if(G__67074)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__67074.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__67074.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__67074);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__67074);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__67075_SHARP_){return (cljs.core.val.call(null,p1__67075_SHARP_) > (1));
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
var vec__67077 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__67077,(0),null);var v = cljs.core.nth.call(null,vec__67077,(1),null);var p = vec__67077;if(cljs.core.truth_(p))
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
var ufv___67083 = schema.utils.use_fn_validation;var output_schema67078_67084 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema67079_67085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker67080_67086 = schema.core.checker.call(null,input_schema67079_67085);var output_checker67081_67087 = schema.core.checker.call(null,output_schema67078_67084);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___67083,output_schema67078_67084,input_schema67079_67085,input_checker67080_67086,output_checker67081_67087){
return (function unwrap_schema_form_key(G__67082){var validate__10517__auto__ = ufv___67083.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67082], null);var temp__4126__auto___67089 = input_checker67080_67086.call(null,args__10518__auto___67088);if(cljs.core.truth_(temp__4126__auto___67089))
{var error__10519__auto___67090 = temp__4126__auto___67089;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___67090)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67079_67085,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67088,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67090], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__67082;while(true){
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
{var temp__4126__auto___67091 = output_checker67081_67087.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67091))
{var error__10519__auto___67092 = temp__4126__auto___67091;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___67092)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67078_67084,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67092], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67083,output_schema67078_67084,input_schema67079_67085,input_checker67080_67086,output_checker67081_67087))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema67078_67084,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67079_67085], null)));
var ufv___67098 = schema.utils.use_fn_validation;var output_schema67093_67099 = schema.core.Any;var input_schema67094_67100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker67095_67101 = schema.core.checker.call(null,input_schema67094_67100);var output_checker67096_67102 = schema.core.checker.call(null,output_schema67093_67099);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___67098,output_schema67093_67099,input_schema67094_67100,input_checker67095_67101,output_checker67096_67102){
return (function explicit_schema_key_map(G__67097){var validate__10517__auto__ = ufv___67098.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67097], null);var temp__4126__auto___67104 = input_checker67095_67101.call(null,args__10518__auto___67103);if(cljs.core.truth_(temp__4126__auto___67104))
{var error__10519__auto___67105 = temp__4126__auto___67104;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___67105)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67094_67100,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67103,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67105], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__67097;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67106 = output_checker67096_67102.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67106))
{var error__10519__auto___67107 = temp__4126__auto___67106;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___67107)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67093_67099,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67107], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67098,output_schema67093_67099,input_schema67094_67100,input_checker67095_67101,output_checker67096_67102))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema67093_67099,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67094_67100], null)));
var ufv___67113 = schema.utils.use_fn_validation;var output_schema67108_67114 = schema.core.Any;var input_schema67109_67115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker67110_67116 = schema.core.checker.call(null,input_schema67109_67115);var output_checker67111_67117 = schema.core.checker.call(null,output_schema67108_67114);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___67113,output_schema67108_67114,input_schema67109_67115,input_checker67110_67116,output_checker67111_67117){
return (function split_schema_keys(G__67112){var validate__10517__auto__ = ufv___67113.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67112], null);var temp__4126__auto___67119 = input_checker67110_67116.call(null,args__10518__auto___67118);if(cljs.core.truth_(temp__4126__auto___67119))
{var error__10519__auto___67120 = temp__4126__auto___67119;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___67120)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67109_67115,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67118,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67120], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__67112;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67121 = output_checker67111_67117.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67121))
{var error__10519__auto___67122 = temp__4126__auto___67121;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___67122)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67108_67114,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67122], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67113,output_schema67108_67114,input_schema67109_67115,input_checker67110_67116,output_checker67111_67117))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema67108_67114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67109_67115], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__67126){var vec__67127 = p__67126;var k = cljs.core.nth.call(null,vec__67127,(0),null);var v = cljs.core.nth.call(null,vec__67127,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__67128 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__67128,(0),null);var ov = cljs.core.nth.call(null,vec__67128,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__67129){
var key_project = cljs.core.first(arglist__67129);
arglist__67129 = cljs.core.next(arglist__67129);
var key_combine = cljs.core.first(arglist__67129);
arglist__67129 = cljs.core.next(arglist__67129);
var val_combine = cljs.core.first(arglist__67129);
var maps = cljs.core.rest(arglist__67129);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___67137 = schema.utils.use_fn_validation;var output_schema67131_67138 = plumbing.fnk.schema.InputSchema;var input_schema67132_67139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker67133_67140 = schema.core.checker.call(null,input_schema67132_67139);var output_checker67134_67141 = schema.core.checker.call(null,output_schema67131_67138);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141){
return (function union_input_schemata(G__67135,G__67136){var validate__10517__auto__ = ufv___67137.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67135,G__67136], null);var temp__4126__auto___67143 = input_checker67133_67140.call(null,args__10518__auto___67142);if(cljs.core.truth_(temp__4126__auto___67143))
{var error__10519__auto___67144 = temp__4126__auto___67143;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___67144)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67132_67139,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67142,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67144], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__67135;var i2 = G__67136;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10517__auto__,ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141){
return (function (p1__67130_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__67130_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__67130_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10517__auto__,ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141))
,((function (validate__10517__auto__,ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141){
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
});})(validate__10517__auto__,ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141))
,((function (validate__10517__auto__,ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10517__auto__,ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67145 = output_checker67134_67141.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67145))
{var error__10519__auto___67146 = temp__4126__auto___67145;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___67146)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67131_67138,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67146], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67137,output_schema67131_67138,input_schema67132_67139,input_checker67133_67140,output_checker67134_67141))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema67131_67138,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67132_67139], null)));
var ufv___67152 = schema.utils.use_fn_validation;var output_schema67147_67153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema67148_67154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker67149_67155 = schema.core.checker.call(null,input_schema67148_67154);var output_checker67150_67156 = schema.core.checker.call(null,output_schema67147_67153);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___67152,output_schema67147_67153,input_schema67148_67154,input_checker67149_67155,output_checker67150_67156){
return (function required_toplevel_keys(G__67151){var validate__10517__auto__ = ufv___67152.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67151], null);var temp__4126__auto___67158 = input_checker67149_67155.call(null,args__10518__auto___67157);if(cljs.core.truth_(temp__4126__auto___67158))
{var error__10519__auto___67159 = temp__4126__auto___67158;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___67159)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67148_67154,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67157,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67159], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__67151;while(true){
return cljs.core.keep.call(null,((function (validate__10517__auto__,ufv___67152,output_schema67147_67153,input_schema67148_67154,input_checker67149_67155,output_checker67150_67156){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___67152,output_schema67147_67153,input_schema67148_67154,input_checker67149_67155,output_checker67150_67156))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67160 = output_checker67150_67156.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67160))
{var error__10519__auto___67161 = temp__4126__auto___67160;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___67161)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67147_67153,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67161], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67152,output_schema67147_67153,input_schema67148_67154,input_checker67149_67155,output_checker67150_67156))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema67147_67153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67148_67154], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__67170(s__67171){return (new cljs.core.LazySeq(null,(function (){var s__67171__$1 = s__67171;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67171__$1);if(temp__4126__auto__)
{var s__67171__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67171__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67171__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67173 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67172 = (0);while(true){
if((i__67172 < size__4282__auto__))
{var vec__67176 = cljs.core._nth.call(null,c__4281__auto__,i__67172);var k = cljs.core.nth.call(null,vec__67176,(0),null);var v = cljs.core.nth.call(null,vec__67176,(1),null);cljs.core.chunk_append.call(null,b__67173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__67178 = (i__67172 + (1));
i__67172 = G__67178;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67173),iter__67170.call(null,cljs.core.chunk_rest.call(null,s__67171__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67173),null);
}
} else
{var vec__67177 = cljs.core.first.call(null,s__67171__$2);var k = cljs.core.nth.call(null,vec__67177,(0),null);var v = cljs.core.nth.call(null,vec__67177,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__67170.call(null,cljs.core.rest.call(null,s__67171__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__67187(s__67188){return (new cljs.core.LazySeq(null,(function (){var s__67188__$1 = s__67188;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67188__$1);if(temp__4126__auto__)
{var s__67188__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67188__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67188__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67190 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67189 = (0);while(true){
if((i__67189 < size__4282__auto__))
{var vec__67193 = cljs.core._nth.call(null,c__4281__auto__,i__67189);var k = cljs.core.nth.call(null,vec__67193,(0),null);var v = cljs.core.nth.call(null,vec__67193,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__67190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__67195 = (i__67189 + (1));
i__67189 = G__67195;
continue;
}
} else
{{
var G__67196 = (i__67189 + (1));
i__67189 = G__67196;
continue;
}
}
} else
{{
var G__67197 = (i__67189 + (1));
i__67189 = G__67197;
continue;
}
}
} else
{{
var G__67198 = (i__67189 + (1));
i__67189 = G__67198;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67190),iter__67187.call(null,cljs.core.chunk_rest.call(null,s__67188__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67190),null);
}
} else
{var vec__67194 = cljs.core.first.call(null,s__67188__$2);var k = cljs.core.nth.call(null,vec__67194,(0),null);var v = cljs.core.nth.call(null,vec__67194,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__67187.call(null,cljs.core.rest.call(null,s__67188__$2)));
} else
{{
var G__67199 = cljs.core.rest.call(null,s__67188__$2);
s__67188__$1 = G__67199;
continue;
}
}
} else
{{
var G__67200 = cljs.core.rest.call(null,s__67188__$2);
s__67188__$1 = G__67200;
continue;
}
}
} else
{{
var G__67201 = cljs.core.rest.call(null,s__67188__$2);
s__67188__$1 = G__67201;
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
var ufv___67224 = schema.utils.use_fn_validation;var output_schema67202_67225 = schema.core.Any;var input_schema67203_67226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker67204_67227 = schema.core.checker.call(null,input_schema67203_67226);var output_checker67205_67228 = schema.core.checker.call(null,output_schema67202_67225);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___67224,output_schema67202_67225,input_schema67203_67226,input_checker67204_67227,output_checker67205_67228){
return (function compose_schemata(G__67206,G__67207){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___67229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67206,G__67207], null);var temp__4126__auto___67230 = input_checker67204_67227.call(null,args__10518__auto___67229);if(cljs.core.truth_(temp__4126__auto___67230))
{var error__10519__auto___67231 = temp__4126__auto___67230;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___67231)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67203_67226,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67229,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67231], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__67218 = G__67206;var vec__67220 = G__67218;var i2 = cljs.core.nth.call(null,vec__67220,(0),null);var o2 = cljs.core.nth.call(null,vec__67220,(1),null);var G__67219 = G__67207;var vec__67221 = G__67219;var i1 = cljs.core.nth.call(null,vec__67221,(0),null);var o1 = cljs.core.nth.call(null,vec__67221,(1),null);var G__67218__$1 = G__67218;var G__67219__$1 = G__67219;while(true){
var vec__67222 = G__67218__$1;var i2__$1 = cljs.core.nth.call(null,vec__67222,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__67222,(1),null);var vec__67223 = G__67219__$1;var i1__$1 = cljs.core.nth.call(null,vec__67223,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__67223,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___67232 = output_checker67205_67228.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67232))
{var error__10519__auto___67233 = temp__4126__auto___67232;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___67233)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67202_67225,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67233], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67224,output_schema67202_67225,input_schema67203_67226,input_checker67204_67227,output_checker67205_67228))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema67202_67225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67203_67226], null)));
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
var ufv___67312 = schema.utils.use_fn_validation;var output_schema67234_67313 = schema.core.Any;var input_schema67235_67314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker67236_67315 = schema.core.checker.call(null,input_schema67235_67314);var output_checker67237_67316 = schema.core.checker.call(null,output_schema67234_67313);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316){
return (function split_schema(G__67238,G__67239){var validate__10517__auto__ = ufv___67312.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67238,G__67239], null);var temp__4126__auto___67318 = input_checker67236_67315.call(null,args__10518__auto___67317);if(cljs.core.truth_(temp__4126__auto___67318))
{var error__10519__auto___67319 = temp__4126__auto___67318;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___67319)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67235_67314,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67317,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67319], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__67238;var ks = G__67239;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316){
return (function iter__67276(s__67277){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316){
return (function (){var s__67277__$1 = s__67277;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67277__$1);if(temp__4126__auto__)
{var s__67277__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67277__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67277__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67279 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67278 = (0);while(true){
if((i__67278 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__67278);cljs.core.chunk_append.call(null,b__67279,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__67278,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67279,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316){
return (function iter__67296(s__67297){return (new cljs.core.LazySeq(null,((function (i__67278,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67279,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316){
return (function (){var s__67297__$1 = s__67297;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__67297__$1);if(temp__4126__auto____$1)
{var s__67297__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__67297__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__67297__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__67299 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__67298 = (0);while(true){
if((i__67298 < size__4282__auto____$1))
{var vec__67302 = cljs.core._nth.call(null,c__4281__auto____$1,i__67298);var k = cljs.core.nth.call(null,vec__67302,(0),null);var v = cljs.core.nth.call(null,vec__67302,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__67299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__67320 = (i__67298 + (1));
i__67298 = G__67320;
continue;
}
} else
{{
var G__67321 = (i__67298 + (1));
i__67298 = G__67321;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67299),iter__67296.call(null,cljs.core.chunk_rest.call(null,s__67297__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67299),null);
}
} else
{var vec__67303 = cljs.core.first.call(null,s__67297__$2);var k = cljs.core.nth.call(null,vec__67303,(0),null);var v = cljs.core.nth.call(null,vec__67303,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__67296.call(null,cljs.core.rest.call(null,s__67297__$2)));
} else
{{
var G__67322 = cljs.core.rest.call(null,s__67297__$2);
s__67297__$1 = G__67322;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__67278,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67279,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316))
,null,null));
});})(i__67278,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67279,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__67323 = (i__67278 + (1));
i__67278 = G__67323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67279),iter__67276.call(null,cljs.core.chunk_rest.call(null,s__67277__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67279),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__67277__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316){
return (function iter__67304(s__67305){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316){
return (function (){var s__67305__$1 = s__67305;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__67305__$1);if(temp__4126__auto____$1)
{var s__67305__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__67305__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67305__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67307 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67306 = (0);while(true){
if((i__67306 < size__4282__auto__))
{var vec__67310 = cljs.core._nth.call(null,c__4281__auto__,i__67306);var k = cljs.core.nth.call(null,vec__67310,(0),null);var v = cljs.core.nth.call(null,vec__67310,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__67307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__67324 = (i__67306 + (1));
i__67306 = G__67324;
continue;
}
} else
{{
var G__67325 = (i__67306 + (1));
i__67306 = G__67325;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67307),iter__67304.call(null,cljs.core.chunk_rest.call(null,s__67305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67307),null);
}
} else
{var vec__67311 = cljs.core.first.call(null,s__67305__$2);var k = cljs.core.nth.call(null,vec__67311,(0),null);var v = cljs.core.nth.call(null,vec__67311,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__67304.call(null,cljs.core.rest.call(null,s__67305__$2)));
} else
{{
var G__67326 = cljs.core.rest.call(null,s__67305__$2);
s__67305__$1 = G__67326;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316))
,null,null));
});})(in_QMARK_,s__67277__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316))
;return iter__4283__auto__.call(null,s);
})()),iter__67276.call(null,cljs.core.rest.call(null,s__67277__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67327 = output_checker67237_67316.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67327))
{var error__10519__auto___67328 = temp__4126__auto___67327;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___67328)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67234_67313,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67328], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67312,output_schema67234_67313,input_schema67235_67314,input_checker67236_67315,output_checker67237_67316))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema67234_67313,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67235_67314], null)));
var ufv___67359 = schema.utils.use_fn_validation;var output_schema67329_67360 = plumbing.fnk.schema.GraphIOSchemata;var input_schema67330_67361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker67331_67362 = schema.core.checker.call(null,input_schema67330_67361);var output_checker67332_67363 = schema.core.checker.call(null,output_schema67329_67360);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___67359,output_schema67329_67360,input_schema67330_67361,input_checker67331_67362,output_checker67332_67363){
return (function sequence_schemata(G__67333,G__67334){var validate__10517__auto__ = ufv___67359.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67333,G__67334], null);var temp__4126__auto___67365 = input_checker67331_67362.call(null,args__10518__auto___67364);if(cljs.core.truth_(temp__4126__auto___67365))
{var error__10519__auto___67366 = temp__4126__auto___67365;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___67366)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67330_67361,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67364,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67366], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__67350 = G__67333;var vec__67352 = G__67350;var i1 = cljs.core.nth.call(null,vec__67352,(0),null);var o1 = cljs.core.nth.call(null,vec__67352,(1),null);var G__67351 = G__67334;var vec__67353 = G__67351;var k = cljs.core.nth.call(null,vec__67353,(0),null);var vec__67354 = cljs.core.nth.call(null,vec__67353,(1),null);var i2 = cljs.core.nth.call(null,vec__67354,(0),null);var o2 = cljs.core.nth.call(null,vec__67354,(1),null);var G__67350__$1 = G__67350;var G__67351__$1 = G__67351;while(true){
var vec__67355 = G__67350__$1;var i1__$1 = cljs.core.nth.call(null,vec__67355,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__67355,(1),null);var vec__67356 = G__67351__$1;var k__$1 = cljs.core.nth.call(null,vec__67356,(0),null);var vec__67357 = cljs.core.nth.call(null,vec__67356,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__67357,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__67357,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__67358 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__67358,(0),null);var unused = cljs.core.nth.call(null,vec__67358,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67367 = output_checker67332_67363.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67367))
{var error__10519__auto___67368 = temp__4126__auto___67367;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___67368)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67329_67360,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67368], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67359,output_schema67329_67360,input_schema67330_67361,input_checker67331_67362,output_checker67332_67363))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema67329_67360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67330_67361], null)));

//# sourceMappingURL=schema.js.map