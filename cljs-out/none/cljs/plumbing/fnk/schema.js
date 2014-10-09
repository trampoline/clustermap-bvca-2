// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10547__10548__auto__){var G__67711 = p1__10547__10548__auto__;if(G__67711)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__67711.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__67711.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__67711);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__67711);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__67712_SHARP_){return (cljs.core.val.call(null,p1__67712_SHARP_) > (1));
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
var vec__67714 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__67714,(0),null);var v = cljs.core.nth.call(null,vec__67714,(1),null);var p = vec__67714;if(cljs.core.truth_(p))
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
var ufv___67720 = schema.utils.use_fn_validation;var output_schema67715_67721 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema67716_67722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker67717_67723 = schema.core.checker.call(null,input_schema67716_67722);var output_checker67718_67724 = schema.core.checker.call(null,output_schema67715_67721);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___67720,output_schema67715_67721,input_schema67716_67722,input_checker67717_67723,output_checker67718_67724){
return (function unwrap_schema_form_key(G__67719){var validate__10517__auto__ = ufv___67720.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67719], null);var temp__4126__auto___67726 = input_checker67717_67723.call(null,args__10518__auto___67725);if(cljs.core.truth_(temp__4126__auto___67726))
{var error__10519__auto___67727 = temp__4126__auto___67726;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___67727)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67716_67722,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67725,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67727], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var k = G__67719;while(true){
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
{var temp__4126__auto___67728 = output_checker67718_67724.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67728))
{var error__10519__auto___67729 = temp__4126__auto___67728;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10519__auto___67729)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67715_67721,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67729], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67720,output_schema67715_67721,input_schema67716_67722,input_checker67717_67723,output_checker67718_67724))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema67715_67721,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67716_67722], null)));
var ufv___67735 = schema.utils.use_fn_validation;var output_schema67730_67736 = schema.core.Any;var input_schema67731_67737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker67732_67738 = schema.core.checker.call(null,input_schema67731_67737);var output_checker67733_67739 = schema.core.checker.call(null,output_schema67730_67736);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___67735,output_schema67730_67736,input_schema67731_67737,input_checker67732_67738,output_checker67733_67739){
return (function explicit_schema_key_map(G__67734){var validate__10517__auto__ = ufv___67735.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67734], null);var temp__4126__auto___67741 = input_checker67732_67738.call(null,args__10518__auto___67740);if(cljs.core.truth_(temp__4126__auto___67741))
{var error__10519__auto___67742 = temp__4126__auto___67741;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___67742)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67731_67737,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67740,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67742], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__67734;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67743 = output_checker67733_67739.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67743))
{var error__10519__auto___67744 = temp__4126__auto___67743;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10519__auto___67744)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67730_67736,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67744], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67735,output_schema67730_67736,input_schema67731_67737,input_checker67732_67738,output_checker67733_67739))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema67730_67736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67731_67737], null)));
var ufv___67750 = schema.utils.use_fn_validation;var output_schema67745_67751 = schema.core.Any;var input_schema67746_67752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker67747_67753 = schema.core.checker.call(null,input_schema67746_67752);var output_checker67748_67754 = schema.core.checker.call(null,output_schema67745_67751);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___67750,output_schema67745_67751,input_schema67746_67752,input_checker67747_67753,output_checker67748_67754){
return (function split_schema_keys(G__67749){var validate__10517__auto__ = ufv___67750.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67749], null);var temp__4126__auto___67756 = input_checker67747_67753.call(null,args__10518__auto___67755);if(cljs.core.truth_(temp__4126__auto___67756))
{var error__10519__auto___67757 = temp__4126__auto___67756;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___67757)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67746_67752,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67755,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67757], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__67749;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67758 = output_checker67748_67754.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67758))
{var error__10519__auto___67759 = temp__4126__auto___67758;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10519__auto___67759)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67745_67751,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67759], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67750,output_schema67745_67751,input_schema67746_67752,input_checker67747_67753,output_checker67748_67754))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema67745_67751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67746_67752], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__67763){var vec__67764 = p__67763;var k = cljs.core.nth.call(null,vec__67764,(0),null);var v = cljs.core.nth.call(null,vec__67764,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__67765 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__67765,(0),null);var ov = cljs.core.nth.call(null,vec__67765,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__67766){
var key_project = cljs.core.first(arglist__67766);
arglist__67766 = cljs.core.next(arglist__67766);
var key_combine = cljs.core.first(arglist__67766);
arglist__67766 = cljs.core.next(arglist__67766);
var val_combine = cljs.core.first(arglist__67766);
var maps = cljs.core.rest(arglist__67766);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___67774 = schema.utils.use_fn_validation;var output_schema67768_67775 = plumbing.fnk.schema.InputSchema;var input_schema67769_67776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker67770_67777 = schema.core.checker.call(null,input_schema67769_67776);var output_checker67771_67778 = schema.core.checker.call(null,output_schema67768_67775);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778){
return (function union_input_schemata(G__67772,G__67773){var validate__10517__auto__ = ufv___67774.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67772,G__67773], null);var temp__4126__auto___67780 = input_checker67770_67777.call(null,args__10518__auto___67779);if(cljs.core.truth_(temp__4126__auto___67780))
{var error__10519__auto___67781 = temp__4126__auto___67780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___67781)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67769_67776,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67779,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67781], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var i1 = G__67772;var i2 = G__67773;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10517__auto__,ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778){
return (function (p1__67767_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__67767_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__67767_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10517__auto__,ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778))
,((function (validate__10517__auto__,ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778){
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
});})(validate__10517__auto__,ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778))
,((function (validate__10517__auto__,ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10517__auto__,ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67782 = output_checker67771_67778.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67782))
{var error__10519__auto___67783 = temp__4126__auto___67782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10519__auto___67783)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67768_67775,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67783], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67774,output_schema67768_67775,input_schema67769_67776,input_checker67770_67777,output_checker67771_67778))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema67768_67775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67769_67776], null)));
var ufv___67789 = schema.utils.use_fn_validation;var output_schema67784_67790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema67785_67791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker67786_67792 = schema.core.checker.call(null,input_schema67785_67791);var output_checker67787_67793 = schema.core.checker.call(null,output_schema67784_67790);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___67789,output_schema67784_67790,input_schema67785_67791,input_checker67786_67792,output_checker67787_67793){
return (function required_toplevel_keys(G__67788){var validate__10517__auto__ = ufv___67789.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67788], null);var temp__4126__auto___67795 = input_checker67786_67792.call(null,args__10518__auto___67794);if(cljs.core.truth_(temp__4126__auto___67795))
{var error__10519__auto___67796 = temp__4126__auto___67795;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___67796)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67785_67791,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67794,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67796], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var input_schema = G__67788;while(true){
return cljs.core.keep.call(null,((function (validate__10517__auto__,ufv___67789,output_schema67784_67790,input_schema67785_67791,input_checker67786_67792,output_checker67787_67793){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__10517__auto__,ufv___67789,output_schema67784_67790,input_schema67785_67791,input_checker67786_67792,output_checker67787_67793))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67797 = output_checker67787_67793.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67797))
{var error__10519__auto___67798 = temp__4126__auto___67797;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10519__auto___67798)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67784_67790,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67798], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67789,output_schema67784_67790,input_schema67785_67791,input_checker67786_67792,output_checker67787_67793))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema67784_67790,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67785_67791], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__67807(s__67808){return (new cljs.core.LazySeq(null,(function (){var s__67808__$1 = s__67808;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67808__$1);if(temp__4126__auto__)
{var s__67808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67808__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67808__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67810 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67809 = (0);while(true){
if((i__67809 < size__4282__auto__))
{var vec__67813 = cljs.core._nth.call(null,c__4281__auto__,i__67809);var k = cljs.core.nth.call(null,vec__67813,(0),null);var v = cljs.core.nth.call(null,vec__67813,(1),null);cljs.core.chunk_append.call(null,b__67810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__67815 = (i__67809 + (1));
i__67809 = G__67815;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67810),iter__67807.call(null,cljs.core.chunk_rest.call(null,s__67808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67810),null);
}
} else
{var vec__67814 = cljs.core.first.call(null,s__67808__$2);var k = cljs.core.nth.call(null,vec__67814,(0),null);var v = cljs.core.nth.call(null,vec__67814,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__67807.call(null,cljs.core.rest.call(null,s__67808__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__67824(s__67825){return (new cljs.core.LazySeq(null,(function (){var s__67825__$1 = s__67825;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67825__$1);if(temp__4126__auto__)
{var s__67825__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67825__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67825__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67827 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67826 = (0);while(true){
if((i__67826 < size__4282__auto__))
{var vec__67830 = cljs.core._nth.call(null,c__4281__auto__,i__67826);var k = cljs.core.nth.call(null,vec__67830,(0),null);var v = cljs.core.nth.call(null,vec__67830,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__67827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__67832 = (i__67826 + (1));
i__67826 = G__67832;
continue;
}
} else
{{
var G__67833 = (i__67826 + (1));
i__67826 = G__67833;
continue;
}
}
} else
{{
var G__67834 = (i__67826 + (1));
i__67826 = G__67834;
continue;
}
}
} else
{{
var G__67835 = (i__67826 + (1));
i__67826 = G__67835;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67827),iter__67824.call(null,cljs.core.chunk_rest.call(null,s__67825__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67827),null);
}
} else
{var vec__67831 = cljs.core.first.call(null,s__67825__$2);var k = cljs.core.nth.call(null,vec__67831,(0),null);var v = cljs.core.nth.call(null,vec__67831,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__67824.call(null,cljs.core.rest.call(null,s__67825__$2)));
} else
{{
var G__67836 = cljs.core.rest.call(null,s__67825__$2);
s__67825__$1 = G__67836;
continue;
}
}
} else
{{
var G__67837 = cljs.core.rest.call(null,s__67825__$2);
s__67825__$1 = G__67837;
continue;
}
}
} else
{{
var G__67838 = cljs.core.rest.call(null,s__67825__$2);
s__67825__$1 = G__67838;
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
var ufv___67861 = schema.utils.use_fn_validation;var output_schema67839_67862 = schema.core.Any;var input_schema67840_67863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker67841_67864 = schema.core.checker.call(null,input_schema67840_67863);var output_checker67842_67865 = schema.core.checker.call(null,output_schema67839_67862);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___67861,output_schema67839_67862,input_schema67840_67863,input_checker67841_67864,output_checker67842_67865){
return (function compose_schemata(G__67843,G__67844){var validate__10517__auto__ = true;if(validate__10517__auto__)
{var args__10518__auto___67866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67843,G__67844], null);var temp__4126__auto___67867 = input_checker67841_67864.call(null,args__10518__auto___67866);if(cljs.core.truth_(temp__4126__auto___67867))
{var error__10519__auto___67868 = temp__4126__auto___67867;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___67868)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67840_67863,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67866,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67868], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__67855 = G__67843;var vec__67857 = G__67855;var i2 = cljs.core.nth.call(null,vec__67857,(0),null);var o2 = cljs.core.nth.call(null,vec__67857,(1),null);var G__67856 = G__67844;var vec__67858 = G__67856;var i1 = cljs.core.nth.call(null,vec__67858,(0),null);var o1 = cljs.core.nth.call(null,vec__67858,(1),null);var G__67855__$1 = G__67855;var G__67856__$1 = G__67856;while(true){
var vec__67859 = G__67855__$1;var i2__$1 = cljs.core.nth.call(null,vec__67859,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__67859,(1),null);var vec__67860 = G__67856__$1;var i1__$1 = cljs.core.nth.call(null,vec__67860,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__67860,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__10517__auto__)
{var temp__4126__auto___67869 = output_checker67842_67865.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67869))
{var error__10519__auto___67870 = temp__4126__auto___67869;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10519__auto___67870)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67839_67862,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67870], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67861,output_schema67839_67862,input_schema67840_67863,input_checker67841_67864,output_checker67842_67865))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema67839_67862,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67840_67863], null)));
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
var ufv___67949 = schema.utils.use_fn_validation;var output_schema67871_67950 = schema.core.Any;var input_schema67872_67951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker67873_67952 = schema.core.checker.call(null,input_schema67872_67951);var output_checker67874_67953 = schema.core.checker.call(null,output_schema67871_67950);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953){
return (function split_schema(G__67875,G__67876){var validate__10517__auto__ = ufv___67949.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___67954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67875,G__67876], null);var temp__4126__auto___67955 = input_checker67873_67952.call(null,args__10518__auto___67954);if(cljs.core.truth_(temp__4126__auto___67955))
{var error__10519__auto___67956 = temp__4126__auto___67955;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___67956)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67872_67951,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___67954,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67956], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var s = G__67875;var ks = G__67876;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953){
return (function iter__67913(s__67914){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953){
return (function (){var s__67914__$1 = s__67914;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67914__$1);if(temp__4126__auto__)
{var s__67914__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67914__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67914__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67916 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67915 = (0);while(true){
if((i__67915 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__67915);cljs.core.chunk_append.call(null,b__67916,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__67915,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67916,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953){
return (function iter__67933(s__67934){return (new cljs.core.LazySeq(null,((function (i__67915,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67916,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953){
return (function (){var s__67934__$1 = s__67934;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__67934__$1);if(temp__4126__auto____$1)
{var s__67934__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__67934__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__67934__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__67936 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__67935 = (0);while(true){
if((i__67935 < size__4282__auto____$1))
{var vec__67939 = cljs.core._nth.call(null,c__4281__auto____$1,i__67935);var k = cljs.core.nth.call(null,vec__67939,(0),null);var v = cljs.core.nth.call(null,vec__67939,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__67936,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__67957 = (i__67935 + (1));
i__67935 = G__67957;
continue;
}
} else
{{
var G__67958 = (i__67935 + (1));
i__67935 = G__67958;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67936),iter__67933.call(null,cljs.core.chunk_rest.call(null,s__67934__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67936),null);
}
} else
{var vec__67940 = cljs.core.first.call(null,s__67934__$2);var k = cljs.core.nth.call(null,vec__67940,(0),null);var v = cljs.core.nth.call(null,vec__67940,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__67933.call(null,cljs.core.rest.call(null,s__67934__$2)));
} else
{{
var G__67959 = cljs.core.rest.call(null,s__67934__$2);
s__67934__$1 = G__67959;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__67915,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67916,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953))
,null,null));
});})(i__67915,in_QMARK_,c__4281__auto__,size__4282__auto__,b__67916,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__67960 = (i__67915 + (1));
i__67915 = G__67960;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67916),iter__67913.call(null,cljs.core.chunk_rest.call(null,s__67914__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67916),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__67914__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953){
return (function iter__67941(s__67942){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953){
return (function (){var s__67942__$1 = s__67942;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__67942__$1);if(temp__4126__auto____$1)
{var s__67942__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__67942__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67942__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67944 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67943 = (0);while(true){
if((i__67943 < size__4282__auto__))
{var vec__67947 = cljs.core._nth.call(null,c__4281__auto__,i__67943);var k = cljs.core.nth.call(null,vec__67947,(0),null);var v = cljs.core.nth.call(null,vec__67947,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__67944,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__67961 = (i__67943 + (1));
i__67943 = G__67961;
continue;
}
} else
{{
var G__67962 = (i__67943 + (1));
i__67943 = G__67962;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67944),iter__67941.call(null,cljs.core.chunk_rest.call(null,s__67942__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67944),null);
}
} else
{var vec__67948 = cljs.core.first.call(null,s__67942__$2);var k = cljs.core.nth.call(null,vec__67948,(0),null);var v = cljs.core.nth.call(null,vec__67948,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__67941.call(null,cljs.core.rest.call(null,s__67942__$2)));
} else
{{
var G__67963 = cljs.core.rest.call(null,s__67942__$2);
s__67942__$1 = G__67963;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953))
,null,null));
});})(in_QMARK_,s__67914__$2,temp__4126__auto__,ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953))
;return iter__4283__auto__.call(null,s);
})()),iter__67913.call(null,cljs.core.rest.call(null,s__67914__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953))
,null,null));
});})(ks__$1,validate__10517__auto__,ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___67964 = output_checker67874_67953.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___67964))
{var error__10519__auto___67965 = temp__4126__auto___67964;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10519__auto___67965)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67871_67950,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___67965], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67949,output_schema67871_67950,input_schema67872_67951,input_checker67873_67952,output_checker67874_67953))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema67871_67950,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67872_67951], null)));
var ufv___67996 = schema.utils.use_fn_validation;var output_schema67966_67997 = plumbing.fnk.schema.GraphIOSchemata;var input_schema67967_67998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker67968_67999 = schema.core.checker.call(null,input_schema67967_67998);var output_checker67969_68000 = schema.core.checker.call(null,output_schema67966_67997);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___67996,output_schema67966_67997,input_schema67967_67998,input_checker67968_67999,output_checker67969_68000){
return (function sequence_schemata(G__67970,G__67971){var validate__10517__auto__ = ufv___67996.get_cell();if(cljs.core.truth_(validate__10517__auto__))
{var args__10518__auto___68001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__67970,G__67971], null);var temp__4126__auto___68002 = input_checker67968_67999.call(null,args__10518__auto___68001);if(cljs.core.truth_(temp__4126__auto___68002))
{var error__10519__auto___68003 = temp__4126__auto___68002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___68003)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema67967_67998,new cljs.core.Keyword(null,"value","value",305978217),args__10518__auto___68001,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___68003], null));
} else
{}
} else
{}
var o__10520__auto__ = (function (){var G__67987 = G__67970;var vec__67989 = G__67987;var i1 = cljs.core.nth.call(null,vec__67989,(0),null);var o1 = cljs.core.nth.call(null,vec__67989,(1),null);var G__67988 = G__67971;var vec__67990 = G__67988;var k = cljs.core.nth.call(null,vec__67990,(0),null);var vec__67991 = cljs.core.nth.call(null,vec__67990,(1),null);var i2 = cljs.core.nth.call(null,vec__67991,(0),null);var o2 = cljs.core.nth.call(null,vec__67991,(1),null);var G__67987__$1 = G__67987;var G__67988__$1 = G__67988;while(true){
var vec__67992 = G__67987__$1;var i1__$1 = cljs.core.nth.call(null,vec__67992,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__67992,(1),null);var vec__67993 = G__67988__$1;var k__$1 = cljs.core.nth.call(null,vec__67993,(0),null);var vec__67994 = cljs.core.nth.call(null,vec__67993,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__67994,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__67994,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__67995 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__67995,(0),null);var unused = cljs.core.nth.call(null,vec__67995,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__10517__auto__))
{var temp__4126__auto___68004 = output_checker67969_68000.call(null,o__10520__auto__);if(cljs.core.truth_(temp__4126__auto___68004))
{var error__10519__auto___68005 = temp__4126__auto___68004;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10519__auto___68005)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema67966_67997,new cljs.core.Keyword(null,"value","value",305978217),o__10520__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__10519__auto___68005], null));
} else
{}
} else
{}
return o__10520__auto__;
});})(ufv___67996,output_schema67966_67997,input_schema67967_67998,input_checker67968_67999,output_checker67969_68000))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema67966_67997,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema67967_67998], null)));

//# sourceMappingURL=schema.js.map