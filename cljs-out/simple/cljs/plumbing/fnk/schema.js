// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10547__10548__auto__){var G__37872 = p1__10547__10548__auto__;if(G__37872)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__37872.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__37872.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__37872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__37872);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__37873_SHARP_){return (cljs.core.val.call(null,p1__37873_SHARP_) > (1));
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
var vec__37875 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__37875,(0),null);var v = cljs.core.nth.call(null,vec__37875,(1),null);var p = vec__37875;if(cljs.core.truth_(p))
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
var ufv___37881 = schema.utils.use_fn_validation;var output_schema37876_37882 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema37877_37883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker37878_37884 = schema.core.checker.call(null,input_schema37877_37883);var output_checker37879_37885 = schema.core.checker.call(null,output_schema37876_37882);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___37881,output_schema37876_37882,input_schema37877_37883,input_checker37878_37884,output_checker37879_37885){
return (function unwrap_schema_form_key(G__37880){var validate__10517__auto__ = ufv___37881.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37880], null);var temp__4126__auto___37887 = input_checker37878_37884.call(null,args__10518__auto___37886);if(cljs.core.truth_(temp__4126__auto___37887))
{var error__10519__auto___37888 = temp__4126__auto___37887;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___37888)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37877_37883,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37886,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37888], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__37880;while(true){
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
{var temp__4126__auto___37889 = output_checker37879_37885.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37889))
{var error__10519__auto___37890 = temp__4126__auto___37889;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___37890)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37876_37882,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37890], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37881,output_schema37876_37882,input_schema37877_37883,input_checker37878_37884,output_checker37879_37885))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema37876_37882,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37877_37883], null)));
var ufv___37896 = schema.utils.use_fn_validation;var output_schema37891_37897 = schema.core.Any;var input_schema37892_37898 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker37893_37899 = schema.core.checker.call(null,input_schema37892_37898);var output_checker37894_37900 = schema.core.checker.call(null,output_schema37891_37897);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___37896,output_schema37891_37897,input_schema37892_37898,input_checker37893_37899,output_checker37894_37900){
return (function explicit_schema_key_map(G__37895){var validate__10517__auto__ = ufv___37896.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37895], null);var temp__4126__auto___37902 = input_checker37893_37899.call(null,args__10518__auto___37901);if(cljs.core.truth_(temp__4126__auto___37902))
{var error__10519__auto___37903 = temp__4126__auto___37902;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___37903)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37892_37898,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37901,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37903], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__37895;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37904 = output_checker37894_37900.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37904))
{var error__10519__auto___37905 = temp__4126__auto___37904;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___37905)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37891_37897,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37905], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37896,output_schema37891_37897,input_schema37892_37898,input_checker37893_37899,output_checker37894_37900))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema37891_37897,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37892_37898], null)));
var ufv___37911 = schema.utils.use_fn_validation;var output_schema37906_37912 = schema.core.Any;var input_schema37907_37913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker37908_37914 = schema.core.checker.call(null,input_schema37907_37913);var output_checker37909_37915 = schema.core.checker.call(null,output_schema37906_37912);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___37911,output_schema37906_37912,input_schema37907_37913,input_checker37908_37914,output_checker37909_37915){
return (function split_schema_keys(G__37910){var validate__10517__auto__ = ufv___37911.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37910], null);var temp__4126__auto___37917 = input_checker37908_37914.call(null,args__10518__auto___37916);if(cljs.core.truth_(temp__4126__auto___37917))
{var error__10519__auto___37918 = temp__4126__auto___37917;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___37918)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37907_37913,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37916,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37918], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__37910;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37919 = output_checker37909_37915.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37919))
{var error__10519__auto___37920 = temp__4126__auto___37919;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___37920)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37906_37912,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37920], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37911,output_schema37906_37912,input_schema37907_37913,input_checker37908_37914,output_checker37909_37915))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema37906_37912,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37907_37913], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__37924){var vec__37925 = p__37924;var k = cljs.core.nth.call(null,vec__37925,(0),null);var v = cljs.core.nth.call(null,vec__37925,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__37926 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__37926,(0),null);var ov = cljs.core.nth.call(null,vec__37926,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__37927){
var key_project = cljs.core.first(arglist__37927);
arglist__37927 = cljs.core.next(arglist__37927);
var key_combine = cljs.core.first(arglist__37927);
arglist__37927 = cljs.core.next(arglist__37927);
var val_combine = cljs.core.first(arglist__37927);
var maps = cljs.core.rest(arglist__37927);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___37935 = schema.utils.use_fn_validation;var output_schema37929_37936 = plumbing.fnk.schema.InputSchema;var input_schema37930_37937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker37931_37938 = schema.core.checker.call(null,input_schema37930_37937);var output_checker37932_37939 = schema.core.checker.call(null,output_schema37929_37936);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939){
return (function union_input_schemata(G__37933,G__37934){var validate__10517__auto__ = ufv___37935.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37933,G__37934], null);var temp__4126__auto___37941 = input_checker37931_37938.call(null,args__10518__auto___37940);if(cljs.core.truth_(temp__4126__auto___37941))
{var error__10519__auto___37942 = temp__4126__auto___37941;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___37942)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37930_37937,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37940,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37942], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__37933;var i2 = G__37934;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10517__auto__,ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939){
return (function (p1__37928_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__37928_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__37928_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10517__auto__,ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939))
,((function (validate__10517__auto__,ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939){
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
});})(validate__10517__auto__,ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939))
,((function (validate__10517__auto__,ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10517__auto__,ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37943 = output_checker37932_37939.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37943))
{var error__10519__auto___37944 = temp__4126__auto___37943;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___37944)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37929_37936,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37944], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37935,output_schema37929_37936,input_schema37930_37937,input_checker37931_37938,output_checker37932_37939))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema37929_37936,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37930_37937], null)));
var ufv___37950 = schema.utils.use_fn_validation;var output_schema37945_37951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema37946_37952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker37947_37953 = schema.core.checker.call(null,input_schema37946_37952);var output_checker37948_37954 = schema.core.checker.call(null,output_schema37945_37951);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___37950,output_schema37945_37951,input_schema37946_37952,input_checker37947_37953,output_checker37948_37954){
return (function required_toplevel_keys(G__37949){var validate__10517__auto__ = ufv___37950.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___37955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37949], null);var temp__4126__auto___37956 = input_checker37947_37953.call(null,args__10518__auto___37955);if(cljs.core.truth_(temp__4126__auto___37956))
{var error__10519__auto___37957 = temp__4126__auto___37956;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___37957)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37946_37952,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___37955,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37957], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__37949;while(true){
return cljs.core.keep.call(null,((function (validate__10517__auto__,ufv___37950,output_schema37945_37951,input_schema37946_37952,input_checker37947_37953,output_checker37948_37954){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___37950,output_schema37945_37951,input_schema37946_37952,input_checker37947_37953,output_checker37948_37954))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___37958 = output_checker37948_37954.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___37958))
{var error__10519__auto___37959 = temp__4126__auto___37958;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___37959)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37945_37951,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___37959], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___37950,output_schema37945_37951,input_schema37946_37952,input_checker37947_37953,output_checker37948_37954))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema37945_37951,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37946_37952], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__37968(s__37969){return (new cljs.core.LazySeq(null,(function (){var s__37969__$1 = s__37969;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37969__$1);if(temp__4126__auto__)
{var s__37969__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37969__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37969__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37971 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37970 = (0);while(true){
if((i__37970 < size__4282__auto__))
{var vec__37974 = cljs.core._nth.call(null,c__4281__auto__,i__37970);var k = cljs.core.nth.call(null,vec__37974,(0),null);var v = cljs.core.nth.call(null,vec__37974,(1),null);cljs.core.chunk_append.call(null,b__37971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__37976 = (i__37970 + (1));
i__37970 = G__37976;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37971),iter__37968.call(null,cljs.core.chunk_rest.call(null,s__37969__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37971),null);
}
} else
{var vec__37975 = cljs.core.first.call(null,s__37969__$2);var k = cljs.core.nth.call(null,vec__37975,(0),null);var v = cljs.core.nth.call(null,vec__37975,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__37968.call(null,cljs.core.rest.call(null,s__37969__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__37985(s__37986){return (new cljs.core.LazySeq(null,(function (){var s__37986__$1 = s__37986;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37986__$1);if(temp__4126__auto__)
{var s__37986__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37986__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37986__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37988 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37987 = (0);while(true){
if((i__37987 < size__4282__auto__))
{var vec__37991 = cljs.core._nth.call(null,c__4281__auto__,i__37987);var k = cljs.core.nth.call(null,vec__37991,(0),null);var v = cljs.core.nth.call(null,vec__37991,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__37988,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__37993 = (i__37987 + (1));
i__37987 = G__37993;
continue;
}
} else
{{
var G__37994 = (i__37987 + (1));
i__37987 = G__37994;
continue;
}
}
} else
{{
var G__37995 = (i__37987 + (1));
i__37987 = G__37995;
continue;
}
}
} else
{{
var G__37996 = (i__37987 + (1));
i__37987 = G__37996;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37988),iter__37985.call(null,cljs.core.chunk_rest.call(null,s__37986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37988),null);
}
} else
{var vec__37992 = cljs.core.first.call(null,s__37986__$2);var k = cljs.core.nth.call(null,vec__37992,(0),null);var v = cljs.core.nth.call(null,vec__37992,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__37985.call(null,cljs.core.rest.call(null,s__37986__$2)));
} else
{{
var G__37997 = cljs.core.rest.call(null,s__37986__$2);
s__37986__$1 = G__37997;
continue;
}
}
} else
{{
var G__37998 = cljs.core.rest.call(null,s__37986__$2);
s__37986__$1 = G__37998;
continue;
}
}
} else
{{
var G__37999 = cljs.core.rest.call(null,s__37986__$2);
s__37986__$1 = G__37999;
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
var ufv___38022 = schema.utils.use_fn_validation;var output_schema38000_38023 = schema.core.Any;var input_schema38001_38024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker38002_38025 = schema.core.checker.call(null,input_schema38001_38024);var output_checker38003_38026 = schema.core.checker.call(null,output_schema38000_38023);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___38022,output_schema38000_38023,input_schema38001_38024,input_checker38002_38025,output_checker38003_38026){
return (function compose_schemata(G__38004,G__38005){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___38027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38004,G__38005], null);var temp__4126__auto___38028 = input_checker38002_38025.call(null,args__10518__auto___38027);if(cljs.core.truth_(temp__4126__auto___38028))
{var error__10519__auto___38029 = temp__4126__auto___38028;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___38029)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38001_38024,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___38027,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38029], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__38016 = G__38004;var vec__38018 = G__38016;var i2 = cljs.core.nth.call(null,vec__38018,(0),null);var o2 = cljs.core.nth.call(null,vec__38018,(1),null);var G__38017 = G__38005;var vec__38019 = G__38017;var i1 = cljs.core.nth.call(null,vec__38019,(0),null);var o1 = cljs.core.nth.call(null,vec__38019,(1),null);var G__38016__$1 = G__38016;var G__38017__$1 = G__38017;while(true){
var vec__38020 = G__38016__$1;var i2__$1 = cljs.core.nth.call(null,vec__38020,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__38020,(1),null);var vec__38021 = G__38017__$1;var i1__$1 = cljs.core.nth.call(null,vec__38021,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__38021,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___38030 = output_checker38003_38026.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___38030))
{var error__10519__auto___38031 = temp__4126__auto___38030;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___38031)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38000_38023,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38031], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___38022,output_schema38000_38023,input_schema38001_38024,input_checker38002_38025,output_checker38003_38026))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema38000_38023,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38001_38024], null)));
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
var ufv___38110 = schema.utils.use_fn_validation;var output_schema38032_38111 = schema.core.Any;var input_schema38033_38112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker38034_38113 = schema.core.checker.call(null,input_schema38033_38112);var output_checker38035_38114 = schema.core.checker.call(null,output_schema38032_38111);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114){
return (function split_schema(G__38036,G__38037){var validate__10517__auto__ = ufv___38110.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___38115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38036,G__38037], null);var temp__4126__auto___38116 = input_checker38034_38113.call(null,args__10518__auto___38115);if(cljs.core.truth_(temp__4126__auto___38116))
{var error__10519__auto___38117 = temp__4126__auto___38116;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___38117)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38033_38112,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___38115,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38117], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__38036;var ks = G__38037;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114){
return (function iter__38074(s__38075){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114){
return (function (){var s__38075__$1 = s__38075;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38075__$1);if(temp__4126__auto__)
{var s__38075__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38075__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38075__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38077 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38076 = (0);while(true){
if((i__38076 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__38076);cljs.core.chunk_append.call(null,b__38077,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__38076,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38077,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114){
return (function iter__38094(s__38095){return (new cljs.core.LazySeq(null,((function (i__38076,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38077,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114){
return (function (){var s__38095__$1 = s__38095;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__38095__$1);if(temp__4126__auto____$1)
{var s__38095__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__38095__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__38095__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__38097 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__38096 = (0);while(true){
if((i__38096 < size__4282__auto____$1))
{var vec__38100 = cljs.core._nth.call(null,c__4281__auto____$1,i__38096);var k = cljs.core.nth.call(null,vec__38100,(0),null);var v = cljs.core.nth.call(null,vec__38100,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__38097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38118 = (i__38096 + (1));
i__38096 = G__38118;
continue;
}
} else
{{
var G__38119 = (i__38096 + (1));
i__38096 = G__38119;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38097),iter__38094.call(null,cljs.core.chunk_rest.call(null,s__38095__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38097),null);
}
} else
{var vec__38101 = cljs.core.first.call(null,s__38095__$2);var k = cljs.core.nth.call(null,vec__38101,(0),null);var v = cljs.core.nth.call(null,vec__38101,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38094.call(null,cljs.core.rest.call(null,s__38095__$2)));
} else
{{
var G__38120 = cljs.core.rest.call(null,s__38095__$2);
s__38095__$1 = G__38120;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__38076,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38077,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114))
,null,null));
});})(i__38076,in_QMARK_,c__4281__auto__,size__4282__auto__,b__38077,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__38121 = (i__38076 + (1));
i__38076 = G__38121;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38077),iter__38074.call(null,cljs.core.chunk_rest.call(null,s__38075__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38077),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__38075__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114){
return (function iter__38102(s__38103){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114){
return (function (){var s__38103__$1 = s__38103;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__38103__$1);if(temp__4126__auto____$1)
{var s__38103__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__38103__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38103__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38105 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38104 = (0);while(true){
if((i__38104 < size__4282__auto__))
{var vec__38108 = cljs.core._nth.call(null,c__4281__auto__,i__38104);var k = cljs.core.nth.call(null,vec__38108,(0),null);var v = cljs.core.nth.call(null,vec__38108,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__38105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38122 = (i__38104 + (1));
i__38104 = G__38122;
continue;
}
} else
{{
var G__38123 = (i__38104 + (1));
i__38104 = G__38123;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38105),iter__38102.call(null,cljs.core.chunk_rest.call(null,s__38103__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38105),null);
}
} else
{var vec__38109 = cljs.core.first.call(null,s__38103__$2);var k = cljs.core.nth.call(null,vec__38109,(0),null);var v = cljs.core.nth.call(null,vec__38109,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38102.call(null,cljs.core.rest.call(null,s__38103__$2)));
} else
{{
var G__38124 = cljs.core.rest.call(null,s__38103__$2);
s__38103__$1 = G__38124;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114))
,null,null));
});})(in_QMARK_,s__38075__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114))
;return iter__4283__auto__.call(null,s);
})()),iter__38074.call(null,cljs.core.rest.call(null,s__38075__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___38125 = output_checker38035_38114.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___38125))
{var error__10519__auto___38126 = temp__4126__auto___38125;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___38126)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38032_38111,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38126], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___38110,output_schema38032_38111,input_schema38033_38112,input_checker38034_38113,output_checker38035_38114))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema38032_38111,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38033_38112], null)));
var ufv___38157 = schema.utils.use_fn_validation;var output_schema38127_38158 = plumbing.fnk.schema.GraphIOSchemata;var input_schema38128_38159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker38129_38160 = schema.core.checker.call(null,input_schema38128_38159);var output_checker38130_38161 = schema.core.checker.call(null,output_schema38127_38158);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___38157,output_schema38127_38158,input_schema38128_38159,input_checker38129_38160,output_checker38130_38161){
return (function sequence_schemata(G__38131,G__38132){var validate__10517__auto__ = ufv___38157.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___38162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38131,G__38132], null);var temp__4126__auto___38163 = input_checker38129_38160.call(null,args__10518__auto___38162);if(cljs.core.truth_(temp__4126__auto___38163))
{var error__10519__auto___38164 = temp__4126__auto___38163;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___38164)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38128_38159,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___38162,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38164], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__38148 = G__38131;var vec__38150 = G__38148;var i1 = cljs.core.nth.call(null,vec__38150,(0),null);var o1 = cljs.core.nth.call(null,vec__38150,(1),null);var G__38149 = G__38132;var vec__38151 = G__38149;var k = cljs.core.nth.call(null,vec__38151,(0),null);var vec__38152 = cljs.core.nth.call(null,vec__38151,(1),null);var i2 = cljs.core.nth.call(null,vec__38152,(0),null);var o2 = cljs.core.nth.call(null,vec__38152,(1),null);var G__38148__$1 = G__38148;var G__38149__$1 = G__38149;while(true){
var vec__38153 = G__38148__$1;var i1__$1 = cljs.core.nth.call(null,vec__38153,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__38153,(1),null);var vec__38154 = G__38149__$1;var k__$1 = cljs.core.nth.call(null,vec__38154,(0),null);var vec__38155 = cljs.core.nth.call(null,vec__38154,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__38155,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__38155,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__38156 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__38156,(0),null);var unused = cljs.core.nth.call(null,vec__38156,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___38165 = output_checker38130_38161.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___38165))
{var error__10519__auto___38166 = temp__4126__auto___38165;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___38166)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38127_38158,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___38166], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___38157,output_schema38127_38158,input_schema38128_38159,input_checker38129_38160,output_checker38130_38161))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema38127_38158,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38128_38159], null)));
