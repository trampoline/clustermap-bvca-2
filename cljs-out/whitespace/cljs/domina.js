// Compiled by ClojureScript 0.0-2268
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_19379 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19380 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19381 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19381,opt_wrapper_19379,table_section_wrapper_19380,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19379,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19380,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19380,cell_wrapper_19381,table_section_wrapper_19380,table_section_wrapper_19380]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19386 = cljs.core.seq.call(null,tbody);var chunk__19387 = null;var count__19388 = (0);var i__19389 = (0);while(true){
if((i__19389 < count__19388))
{var child = cljs.core._nth.call(null,chunk__19387,i__19389);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19390 = seq__19386;
var G__19391 = chunk__19387;
var G__19392 = count__19388;
var G__19393 = (i__19389 + (1));
seq__19386 = G__19390;
chunk__19387 = G__19391;
count__19388 = G__19392;
i__19389 = G__19393;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19386);if(temp__4126__auto__)
{var seq__19386__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19386__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__19386__$1);{
var G__19394 = cljs.core.chunk_rest.call(null,seq__19386__$1);
var G__19395 = c__4299__auto__;
var G__19396 = cljs.core.count.call(null,c__4299__auto__);
var G__19397 = (0);
seq__19386 = G__19394;
chunk__19387 = G__19395;
count__19388 = G__19396;
i__19389 = G__19397;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19386__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19398 = cljs.core.next.call(null,seq__19386__$1);
var G__19399 = null;
var G__19400 = (0);
var G__19401 = (0);
seq__19386 = G__19398;
chunk__19387 = G__19399;
count__19388 = G__19400;
i__19389 = G__19401;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19403 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19403,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19403,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19403,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19404 = wrapper.lastChild;
var G__19405 = (level - (1));
wrapper = G__19404;
level = G__19405;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj19407 = {};return obj19407;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19408){
var mesg = cljs.core.seq(arglist__19408);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19409){
var mesg = cljs.core.seq(arglist__19409);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__19410){
var contents = cljs.core.seq(arglist__19410);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19411_SHARP_){return p1__19411_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19412_SHARP_,p2__19413_SHARP_){return goog.dom.insertChildAt(p1__19412_SHARP_,p2__19413_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19415_SHARP_,p2__19414_SHARP_){return goog.dom.insertSiblingBefore(p2__19414_SHARP_,p1__19415_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19417_SHARP_,p2__19416_SHARP_){return goog.dom.insertSiblingAfter(p2__19416_SHARP_,p1__19417_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19419_SHARP_,p2__19418_SHARP_){return goog.dom.replaceNode(p2__19418_SHARP_,p1__19419_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__19424_19428 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19425_19429 = null;var count__19426_19430 = (0);var i__19427_19431 = (0);while(true){
if((i__19427_19431 < count__19426_19430))
{var n_19432 = cljs.core._nth.call(null,chunk__19425_19429,i__19427_19431);goog.style.setStyle(n_19432,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19433 = seq__19424_19428;
var G__19434 = chunk__19425_19429;
var G__19435 = count__19426_19430;
var G__19436 = (i__19427_19431 + (1));
seq__19424_19428 = G__19433;
chunk__19425_19429 = G__19434;
count__19426_19430 = G__19435;
i__19427_19431 = G__19436;
continue;
}
} else
{var temp__4126__auto___19437 = cljs.core.seq.call(null,seq__19424_19428);if(temp__4126__auto___19437)
{var seq__19424_19438__$1 = temp__4126__auto___19437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19424_19438__$1))
{var c__4299__auto___19439 = cljs.core.chunk_first.call(null,seq__19424_19438__$1);{
var G__19440 = cljs.core.chunk_rest.call(null,seq__19424_19438__$1);
var G__19441 = c__4299__auto___19439;
var G__19442 = cljs.core.count.call(null,c__4299__auto___19439);
var G__19443 = (0);
seq__19424_19428 = G__19440;
chunk__19425_19429 = G__19441;
count__19426_19430 = G__19442;
i__19427_19431 = G__19443;
continue;
}
} else
{var n_19444 = cljs.core.first.call(null,seq__19424_19438__$1);goog.style.setStyle(n_19444,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19445 = cljs.core.next.call(null,seq__19424_19438__$1);
var G__19446 = null;
var G__19447 = (0);
var G__19448 = (0);
seq__19424_19428 = G__19445;
chunk__19425_19429 = G__19446;
count__19426_19430 = G__19447;
i__19427_19431 = G__19448;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19449){
var content = cljs.core.first(arglist__19449);
arglist__19449 = cljs.core.next(arglist__19449);
var name = cljs.core.first(arglist__19449);
var value = cljs.core.rest(arglist__19449);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__19454_19458 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19455_19459 = null;var count__19456_19460 = (0);var i__19457_19461 = (0);while(true){
if((i__19457_19461 < count__19456_19460))
{var n_19462 = cljs.core._nth.call(null,chunk__19455_19459,i__19457_19461);n_19462.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19463 = seq__19454_19458;
var G__19464 = chunk__19455_19459;
var G__19465 = count__19456_19460;
var G__19466 = (i__19457_19461 + (1));
seq__19454_19458 = G__19463;
chunk__19455_19459 = G__19464;
count__19456_19460 = G__19465;
i__19457_19461 = G__19466;
continue;
}
} else
{var temp__4126__auto___19467 = cljs.core.seq.call(null,seq__19454_19458);if(temp__4126__auto___19467)
{var seq__19454_19468__$1 = temp__4126__auto___19467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19454_19468__$1))
{var c__4299__auto___19469 = cljs.core.chunk_first.call(null,seq__19454_19468__$1);{
var G__19470 = cljs.core.chunk_rest.call(null,seq__19454_19468__$1);
var G__19471 = c__4299__auto___19469;
var G__19472 = cljs.core.count.call(null,c__4299__auto___19469);
var G__19473 = (0);
seq__19454_19458 = G__19470;
chunk__19455_19459 = G__19471;
count__19456_19460 = G__19472;
i__19457_19461 = G__19473;
continue;
}
} else
{var n_19474 = cljs.core.first.call(null,seq__19454_19468__$1);n_19474.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19475 = cljs.core.next.call(null,seq__19454_19468__$1);
var G__19476 = null;
var G__19477 = (0);
var G__19478 = (0);
seq__19454_19458 = G__19475;
chunk__19455_19459 = G__19476;
count__19456_19460 = G__19477;
i__19457_19461 = G__19478;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19479){
var content = cljs.core.first(arglist__19479);
arglist__19479 = cljs.core.next(arglist__19479);
var name = cljs.core.first(arglist__19479);
var value = cljs.core.rest(arglist__19479);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19484_19488 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19485_19489 = null;var count__19486_19490 = (0);var i__19487_19491 = (0);while(true){
if((i__19487_19491 < count__19486_19490))
{var n_19492 = cljs.core._nth.call(null,chunk__19485_19489,i__19487_19491);n_19492.removeAttribute(cljs.core.name.call(null,name));
{
var G__19493 = seq__19484_19488;
var G__19494 = chunk__19485_19489;
var G__19495 = count__19486_19490;
var G__19496 = (i__19487_19491 + (1));
seq__19484_19488 = G__19493;
chunk__19485_19489 = G__19494;
count__19486_19490 = G__19495;
i__19487_19491 = G__19496;
continue;
}
} else
{var temp__4126__auto___19497 = cljs.core.seq.call(null,seq__19484_19488);if(temp__4126__auto___19497)
{var seq__19484_19498__$1 = temp__4126__auto___19497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19484_19498__$1))
{var c__4299__auto___19499 = cljs.core.chunk_first.call(null,seq__19484_19498__$1);{
var G__19500 = cljs.core.chunk_rest.call(null,seq__19484_19498__$1);
var G__19501 = c__4299__auto___19499;
var G__19502 = cljs.core.count.call(null,c__4299__auto___19499);
var G__19503 = (0);
seq__19484_19488 = G__19500;
chunk__19485_19489 = G__19501;
count__19486_19490 = G__19502;
i__19487_19491 = G__19503;
continue;
}
} else
{var n_19504 = cljs.core.first.call(null,seq__19484_19498__$1);n_19504.removeAttribute(cljs.core.name.call(null,name));
{
var G__19505 = cljs.core.next.call(null,seq__19484_19498__$1);
var G__19506 = null;
var G__19507 = (0);
var G__19508 = (0);
seq__19484_19488 = G__19505;
chunk__19485_19489 = G__19506;
count__19486_19490 = G__19507;
i__19487_19491 = G__19508;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19510 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19510,(0),null);var v = cljs.core.nth.call(null,vec__19510,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19511_SHARP_){var attr = attrs__$1.item(p1__19511_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19518_19524 = cljs.core.seq.call(null,styles);var chunk__19519_19525 = null;var count__19520_19526 = (0);var i__19521_19527 = (0);while(true){
if((i__19521_19527 < count__19520_19526))
{var vec__19522_19528 = cljs.core._nth.call(null,chunk__19519_19525,i__19521_19527);var name_19529 = cljs.core.nth.call(null,vec__19522_19528,(0),null);var value_19530 = cljs.core.nth.call(null,vec__19522_19528,(1),null);domina.set_style_BANG_.call(null,content,name_19529,value_19530);
{
var G__19531 = seq__19518_19524;
var G__19532 = chunk__19519_19525;
var G__19533 = count__19520_19526;
var G__19534 = (i__19521_19527 + (1));
seq__19518_19524 = G__19531;
chunk__19519_19525 = G__19532;
count__19520_19526 = G__19533;
i__19521_19527 = G__19534;
continue;
}
} else
{var temp__4126__auto___19535 = cljs.core.seq.call(null,seq__19518_19524);if(temp__4126__auto___19535)
{var seq__19518_19536__$1 = temp__4126__auto___19535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19518_19536__$1))
{var c__4299__auto___19537 = cljs.core.chunk_first.call(null,seq__19518_19536__$1);{
var G__19538 = cljs.core.chunk_rest.call(null,seq__19518_19536__$1);
var G__19539 = c__4299__auto___19537;
var G__19540 = cljs.core.count.call(null,c__4299__auto___19537);
var G__19541 = (0);
seq__19518_19524 = G__19538;
chunk__19519_19525 = G__19539;
count__19520_19526 = G__19540;
i__19521_19527 = G__19541;
continue;
}
} else
{var vec__19523_19542 = cljs.core.first.call(null,seq__19518_19536__$1);var name_19543 = cljs.core.nth.call(null,vec__19523_19542,(0),null);var value_19544 = cljs.core.nth.call(null,vec__19523_19542,(1),null);domina.set_style_BANG_.call(null,content,name_19543,value_19544);
{
var G__19545 = cljs.core.next.call(null,seq__19518_19536__$1);
var G__19546 = null;
var G__19547 = (0);
var G__19548 = (0);
seq__19518_19524 = G__19545;
chunk__19519_19525 = G__19546;
count__19520_19526 = G__19547;
i__19521_19527 = G__19548;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19555_19561 = cljs.core.seq.call(null,attrs);var chunk__19556_19562 = null;var count__19557_19563 = (0);var i__19558_19564 = (0);while(true){
if((i__19558_19564 < count__19557_19563))
{var vec__19559_19565 = cljs.core._nth.call(null,chunk__19556_19562,i__19558_19564);var name_19566 = cljs.core.nth.call(null,vec__19559_19565,(0),null);var value_19567 = cljs.core.nth.call(null,vec__19559_19565,(1),null);domina.set_attr_BANG_.call(null,content,name_19566,value_19567);
{
var G__19568 = seq__19555_19561;
var G__19569 = chunk__19556_19562;
var G__19570 = count__19557_19563;
var G__19571 = (i__19558_19564 + (1));
seq__19555_19561 = G__19568;
chunk__19556_19562 = G__19569;
count__19557_19563 = G__19570;
i__19558_19564 = G__19571;
continue;
}
} else
{var temp__4126__auto___19572 = cljs.core.seq.call(null,seq__19555_19561);if(temp__4126__auto___19572)
{var seq__19555_19573__$1 = temp__4126__auto___19572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19555_19573__$1))
{var c__4299__auto___19574 = cljs.core.chunk_first.call(null,seq__19555_19573__$1);{
var G__19575 = cljs.core.chunk_rest.call(null,seq__19555_19573__$1);
var G__19576 = c__4299__auto___19574;
var G__19577 = cljs.core.count.call(null,c__4299__auto___19574);
var G__19578 = (0);
seq__19555_19561 = G__19575;
chunk__19556_19562 = G__19576;
count__19557_19563 = G__19577;
i__19558_19564 = G__19578;
continue;
}
} else
{var vec__19560_19579 = cljs.core.first.call(null,seq__19555_19573__$1);var name_19580 = cljs.core.nth.call(null,vec__19560_19579,(0),null);var value_19581 = cljs.core.nth.call(null,vec__19560_19579,(1),null);domina.set_attr_BANG_.call(null,content,name_19580,value_19581);
{
var G__19582 = cljs.core.next.call(null,seq__19555_19573__$1);
var G__19583 = null;
var G__19584 = (0);
var G__19585 = (0);
seq__19555_19561 = G__19582;
chunk__19556_19562 = G__19583;
count__19557_19563 = G__19584;
i__19558_19564 = G__19585;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19590_19594 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19591_19595 = null;var count__19592_19596 = (0);var i__19593_19597 = (0);while(true){
if((i__19593_19597 < count__19592_19596))
{var node_19598 = cljs.core._nth.call(null,chunk__19591_19595,i__19593_19597);goog.dom.classes.add(node_19598,class$);
{
var G__19599 = seq__19590_19594;
var G__19600 = chunk__19591_19595;
var G__19601 = count__19592_19596;
var G__19602 = (i__19593_19597 + (1));
seq__19590_19594 = G__19599;
chunk__19591_19595 = G__19600;
count__19592_19596 = G__19601;
i__19593_19597 = G__19602;
continue;
}
} else
{var temp__4126__auto___19603 = cljs.core.seq.call(null,seq__19590_19594);if(temp__4126__auto___19603)
{var seq__19590_19604__$1 = temp__4126__auto___19603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19590_19604__$1))
{var c__4299__auto___19605 = cljs.core.chunk_first.call(null,seq__19590_19604__$1);{
var G__19606 = cljs.core.chunk_rest.call(null,seq__19590_19604__$1);
var G__19607 = c__4299__auto___19605;
var G__19608 = cljs.core.count.call(null,c__4299__auto___19605);
var G__19609 = (0);
seq__19590_19594 = G__19606;
chunk__19591_19595 = G__19607;
count__19592_19596 = G__19608;
i__19593_19597 = G__19609;
continue;
}
} else
{var node_19610 = cljs.core.first.call(null,seq__19590_19604__$1);goog.dom.classes.add(node_19610,class$);
{
var G__19611 = cljs.core.next.call(null,seq__19590_19604__$1);
var G__19612 = null;
var G__19613 = (0);
var G__19614 = (0);
seq__19590_19594 = G__19611;
chunk__19591_19595 = G__19612;
count__19592_19596 = G__19613;
i__19593_19597 = G__19614;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19619_19623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19620_19624 = null;var count__19621_19625 = (0);var i__19622_19626 = (0);while(true){
if((i__19622_19626 < count__19621_19625))
{var node_19627 = cljs.core._nth.call(null,chunk__19620_19624,i__19622_19626);goog.dom.classes.remove(node_19627,class$);
{
var G__19628 = seq__19619_19623;
var G__19629 = chunk__19620_19624;
var G__19630 = count__19621_19625;
var G__19631 = (i__19622_19626 + (1));
seq__19619_19623 = G__19628;
chunk__19620_19624 = G__19629;
count__19621_19625 = G__19630;
i__19622_19626 = G__19631;
continue;
}
} else
{var temp__4126__auto___19632 = cljs.core.seq.call(null,seq__19619_19623);if(temp__4126__auto___19632)
{var seq__19619_19633__$1 = temp__4126__auto___19632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19619_19633__$1))
{var c__4299__auto___19634 = cljs.core.chunk_first.call(null,seq__19619_19633__$1);{
var G__19635 = cljs.core.chunk_rest.call(null,seq__19619_19633__$1);
var G__19636 = c__4299__auto___19634;
var G__19637 = cljs.core.count.call(null,c__4299__auto___19634);
var G__19638 = (0);
seq__19619_19623 = G__19635;
chunk__19620_19624 = G__19636;
count__19621_19625 = G__19637;
i__19622_19626 = G__19638;
continue;
}
} else
{var node_19639 = cljs.core.first.call(null,seq__19619_19633__$1);goog.dom.classes.remove(node_19639,class$);
{
var G__19640 = cljs.core.next.call(null,seq__19619_19633__$1);
var G__19641 = null;
var G__19642 = (0);
var G__19643 = (0);
seq__19619_19623 = G__19640;
chunk__19620_19624 = G__19641;
count__19621_19625 = G__19642;
i__19622_19626 = G__19643;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19648_19652 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19649_19653 = null;var count__19650_19654 = (0);var i__19651_19655 = (0);while(true){
if((i__19651_19655 < count__19650_19654))
{var node_19656 = cljs.core._nth.call(null,chunk__19649_19653,i__19651_19655);goog.dom.classes.toggle(node_19656,class$);
{
var G__19657 = seq__19648_19652;
var G__19658 = chunk__19649_19653;
var G__19659 = count__19650_19654;
var G__19660 = (i__19651_19655 + (1));
seq__19648_19652 = G__19657;
chunk__19649_19653 = G__19658;
count__19650_19654 = G__19659;
i__19651_19655 = G__19660;
continue;
}
} else
{var temp__4126__auto___19661 = cljs.core.seq.call(null,seq__19648_19652);if(temp__4126__auto___19661)
{var seq__19648_19662__$1 = temp__4126__auto___19661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19648_19662__$1))
{var c__4299__auto___19663 = cljs.core.chunk_first.call(null,seq__19648_19662__$1);{
var G__19664 = cljs.core.chunk_rest.call(null,seq__19648_19662__$1);
var G__19665 = c__4299__auto___19663;
var G__19666 = cljs.core.count.call(null,c__4299__auto___19663);
var G__19667 = (0);
seq__19648_19652 = G__19664;
chunk__19649_19653 = G__19665;
count__19650_19654 = G__19666;
i__19651_19655 = G__19667;
continue;
}
} else
{var node_19668 = cljs.core.first.call(null,seq__19648_19662__$1);goog.dom.classes.toggle(node_19668,class$);
{
var G__19669 = cljs.core.next.call(null,seq__19648_19662__$1);
var G__19670 = null;
var G__19671 = (0);
var G__19672 = (0);
seq__19648_19652 = G__19669;
chunk__19649_19653 = G__19670;
count__19650_19654 = G__19671;
i__19651_19655 = G__19672;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19681__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19677_19682 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19678_19683 = null;var count__19679_19684 = (0);var i__19680_19685 = (0);while(true){
if((i__19680_19685 < count__19679_19684))
{var node_19686 = cljs.core._nth.call(null,chunk__19678_19683,i__19680_19685);goog.dom.classes.set(node_19686,classes_19681__$1);
{
var G__19687 = seq__19677_19682;
var G__19688 = chunk__19678_19683;
var G__19689 = count__19679_19684;
var G__19690 = (i__19680_19685 + (1));
seq__19677_19682 = G__19687;
chunk__19678_19683 = G__19688;
count__19679_19684 = G__19689;
i__19680_19685 = G__19690;
continue;
}
} else
{var temp__4126__auto___19691 = cljs.core.seq.call(null,seq__19677_19682);if(temp__4126__auto___19691)
{var seq__19677_19692__$1 = temp__4126__auto___19691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19677_19692__$1))
{var c__4299__auto___19693 = cljs.core.chunk_first.call(null,seq__19677_19692__$1);{
var G__19694 = cljs.core.chunk_rest.call(null,seq__19677_19692__$1);
var G__19695 = c__4299__auto___19693;
var G__19696 = cljs.core.count.call(null,c__4299__auto___19693);
var G__19697 = (0);
seq__19677_19682 = G__19694;
chunk__19678_19683 = G__19695;
count__19679_19684 = G__19696;
i__19680_19685 = G__19697;
continue;
}
} else
{var node_19698 = cljs.core.first.call(null,seq__19677_19692__$1);goog.dom.classes.set(node_19698,classes_19681__$1);
{
var G__19699 = cljs.core.next.call(null,seq__19677_19692__$1);
var G__19700 = null;
var G__19701 = (0);
var G__19702 = (0);
seq__19677_19682 = G__19699;
chunk__19678_19683 = G__19700;
count__19679_19684 = G__19701;
i__19680_19685 = G__19702;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19707_19711 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19708_19712 = null;var count__19709_19713 = (0);var i__19710_19714 = (0);while(true){
if((i__19710_19714 < count__19709_19713))
{var node_19715 = cljs.core._nth.call(null,chunk__19708_19712,i__19710_19714);goog.dom.setTextContent(node_19715,value);
{
var G__19716 = seq__19707_19711;
var G__19717 = chunk__19708_19712;
var G__19718 = count__19709_19713;
var G__19719 = (i__19710_19714 + (1));
seq__19707_19711 = G__19716;
chunk__19708_19712 = G__19717;
count__19709_19713 = G__19718;
i__19710_19714 = G__19719;
continue;
}
} else
{var temp__4126__auto___19720 = cljs.core.seq.call(null,seq__19707_19711);if(temp__4126__auto___19720)
{var seq__19707_19721__$1 = temp__4126__auto___19720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19707_19721__$1))
{var c__4299__auto___19722 = cljs.core.chunk_first.call(null,seq__19707_19721__$1);{
var G__19723 = cljs.core.chunk_rest.call(null,seq__19707_19721__$1);
var G__19724 = c__4299__auto___19722;
var G__19725 = cljs.core.count.call(null,c__4299__auto___19722);
var G__19726 = (0);
seq__19707_19711 = G__19723;
chunk__19708_19712 = G__19724;
count__19709_19713 = G__19725;
i__19710_19714 = G__19726;
continue;
}
} else
{var node_19727 = cljs.core.first.call(null,seq__19707_19721__$1);goog.dom.setTextContent(node_19727,value);
{
var G__19728 = cljs.core.next.call(null,seq__19707_19721__$1);
var G__19729 = null;
var G__19730 = (0);
var G__19731 = (0);
seq__19707_19711 = G__19728;
chunk__19708_19712 = G__19729;
count__19709_19713 = G__19730;
i__19710_19714 = G__19731;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19736_19740 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19737_19741 = null;var count__19738_19742 = (0);var i__19739_19743 = (0);while(true){
if((i__19739_19743 < count__19738_19742))
{var node_19744 = cljs.core._nth.call(null,chunk__19737_19741,i__19739_19743);goog.dom.forms.setValue(node_19744,value);
{
var G__19745 = seq__19736_19740;
var G__19746 = chunk__19737_19741;
var G__19747 = count__19738_19742;
var G__19748 = (i__19739_19743 + (1));
seq__19736_19740 = G__19745;
chunk__19737_19741 = G__19746;
count__19738_19742 = G__19747;
i__19739_19743 = G__19748;
continue;
}
} else
{var temp__4126__auto___19749 = cljs.core.seq.call(null,seq__19736_19740);if(temp__4126__auto___19749)
{var seq__19736_19750__$1 = temp__4126__auto___19749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19736_19750__$1))
{var c__4299__auto___19751 = cljs.core.chunk_first.call(null,seq__19736_19750__$1);{
var G__19752 = cljs.core.chunk_rest.call(null,seq__19736_19750__$1);
var G__19753 = c__4299__auto___19751;
var G__19754 = cljs.core.count.call(null,c__4299__auto___19751);
var G__19755 = (0);
seq__19736_19740 = G__19752;
chunk__19737_19741 = G__19753;
count__19738_19742 = G__19754;
i__19739_19743 = G__19755;
continue;
}
} else
{var node_19756 = cljs.core.first.call(null,seq__19736_19750__$1);goog.dom.forms.setValue(node_19756,value);
{
var G__19757 = cljs.core.next.call(null,seq__19736_19750__$1);
var G__19758 = null;
var G__19759 = (0);
var G__19760 = (0);
seq__19736_19740 = G__19757;
chunk__19737_19741 = G__19758;
count__19738_19742 = G__19759;
i__19739_19743 = G__19760;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_19771 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19767_19772 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19768_19773 = null;var count__19769_19774 = (0);var i__19770_19775 = (0);while(true){
if((i__19770_19775 < count__19769_19774))
{var node_19776 = cljs.core._nth.call(null,chunk__19768_19773,i__19770_19775);node_19776.innerHTML = value_19771;
{
var G__19777 = seq__19767_19772;
var G__19778 = chunk__19768_19773;
var G__19779 = count__19769_19774;
var G__19780 = (i__19770_19775 + (1));
seq__19767_19772 = G__19777;
chunk__19768_19773 = G__19778;
count__19769_19774 = G__19779;
i__19770_19775 = G__19780;
continue;
}
} else
{var temp__4126__auto___19781 = cljs.core.seq.call(null,seq__19767_19772);if(temp__4126__auto___19781)
{var seq__19767_19782__$1 = temp__4126__auto___19781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19767_19782__$1))
{var c__4299__auto___19783 = cljs.core.chunk_first.call(null,seq__19767_19782__$1);{
var G__19784 = cljs.core.chunk_rest.call(null,seq__19767_19782__$1);
var G__19785 = c__4299__auto___19783;
var G__19786 = cljs.core.count.call(null,c__4299__auto___19783);
var G__19787 = (0);
seq__19767_19772 = G__19784;
chunk__19768_19773 = G__19785;
count__19769_19774 = G__19786;
i__19770_19775 = G__19787;
continue;
}
} else
{var node_19788 = cljs.core.first.call(null,seq__19767_19782__$1);node_19788.innerHTML = value_19771;
{
var G__19789 = cljs.core.next.call(null,seq__19767_19782__$1);
var G__19790 = null;
var G__19791 = (0);
var G__19792 = (0);
seq__19767_19772 = G__19789;
chunk__19768_19773 = G__19790;
count__19769_19774 = G__19791;
i__19770_19775 = G__19792;
continue;
}
}
} else
{}
}
break;
}
}catch (e19766){if((e19766 instanceof Error))
{var e_19793 = e19766;domina.replace_children_BANG_.call(null,content,value_19771);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19766;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19800_19804 = cljs.core.seq.call(null,children);var chunk__19801_19805 = null;var count__19802_19806 = (0);var i__19803_19807 = (0);while(true){
if((i__19803_19807 < count__19802_19806))
{var child_19808 = cljs.core._nth.call(null,chunk__19801_19805,i__19803_19807);frag.appendChild(child_19808);
{
var G__19809 = seq__19800_19804;
var G__19810 = chunk__19801_19805;
var G__19811 = count__19802_19806;
var G__19812 = (i__19803_19807 + (1));
seq__19800_19804 = G__19809;
chunk__19801_19805 = G__19810;
count__19802_19806 = G__19811;
i__19803_19807 = G__19812;
continue;
}
} else
{var temp__4126__auto___19813 = cljs.core.seq.call(null,seq__19800_19804);if(temp__4126__auto___19813)
{var seq__19800_19814__$1 = temp__4126__auto___19813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19800_19814__$1))
{var c__4299__auto___19815 = cljs.core.chunk_first.call(null,seq__19800_19814__$1);{
var G__19816 = cljs.core.chunk_rest.call(null,seq__19800_19814__$1);
var G__19817 = c__4299__auto___19815;
var G__19818 = cljs.core.count.call(null,c__4299__auto___19815);
var G__19819 = (0);
seq__19800_19804 = G__19816;
chunk__19801_19805 = G__19817;
count__19802_19806 = G__19818;
i__19803_19807 = G__19819;
continue;
}
} else
{var child_19820 = cljs.core.first.call(null,seq__19800_19814__$1);frag.appendChild(child_19820);
{
var G__19821 = cljs.core.next.call(null,seq__19800_19814__$1);
var G__19822 = null;
var G__19823 = (0);
var G__19824 = (0);
seq__19800_19804 = G__19821;
chunk__19801_19805 = G__19822;
count__19802_19806 = G__19823;
i__19803_19807 = G__19824;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__19794_SHARP_,p2__19795_SHARP_){return f.call(null,p1__19794_SHARP_,p2__19795_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19826 = list_thing;if(G__19826)
{var bit__4193__auto__ = (G__19826.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19826.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19826.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19826);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19826);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19827 = content;if(G__19827)
{var bit__4193__auto__ = (G__19827.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19827.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19827.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19827);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19827);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__19828 = content;if(G__19828)
{var bit__4193__auto__ = (G__19828.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19828.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19828.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19828);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19828);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
