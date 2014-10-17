// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_28412 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28413 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_28414 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_28414,opt_wrapper_28412,table_section_wrapper_28413,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_28412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_28413,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_28413,cell_wrapper_28414,table_section_wrapper_28413,table_section_wrapper_28413]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7888__auto__ = div.firstChild;if(cljs.core.truth_(and__7888__auto__))
{return div.firstChild.childNodes;
} else
{return and__7888__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__28419 = cljs.core.seq.call(null,tbody);var chunk__28420 = null;var count__28421 = (0);var i__28422 = (0);while(true){
if((i__28422 < count__28421))
{var child = cljs.core._nth.call(null,chunk__28420,i__28422);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28423 = seq__28419;
var G__28424 = chunk__28420;
var G__28425 = count__28421;
var G__28426 = (i__28422 + (1));
seq__28419 = G__28423;
chunk__28420 = G__28424;
count__28421 = G__28425;
i__28422 = G__28426;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28419);if(temp__4126__auto__)
{var seq__28419__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28419__$1))
{var c__8656__auto__ = cljs.core.chunk_first.call(null,seq__28419__$1);{
var G__28427 = cljs.core.chunk_rest.call(null,seq__28419__$1);
var G__28428 = c__8656__auto__;
var G__28429 = cljs.core.count.call(null,c__8656__auto__);
var G__28430 = (0);
seq__28419 = G__28427;
chunk__28420 = G__28428;
count__28421 = G__28429;
i__28422 = G__28430;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28419__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28431 = cljs.core.next.call(null,seq__28419__$1);
var G__28432 = null;
var G__28433 = (0);
var G__28434 = (0);
seq__28419 = G__28431;
chunk__28420 = G__28432;
count__28421 = G__28433;
i__28422 = G__28434;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__28436 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28436,(0),null);var start_wrap = cljs.core.nth.call(null,vec__28436,(1),null);var end_wrap = cljs.core.nth.call(null,vec__28436,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__28437 = wrapper.lastChild;
var G__28438 = (level - (1));
wrapper = G__28437;
level = G__28438;
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
if(cljs.core.truth_((function (){var and__7888__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__7888__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__7888__auto__;
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
domina.DomContent = (function (){var obj28440 = {};return obj28440;
})();
domina.nodes = (function nodes(content){if((function (){var and__7888__auto__ = content;if(and__7888__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__7888__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8527__auto__ = (((content == null))?null:content);return (function (){var or__7900__auto__ = (domina.nodes[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.nodes["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__7888__auto__ = nodeseq;if(and__7888__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__7888__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8527__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__7900__auto__ = (domina.single_node[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.single_node["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__7888__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__7888__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__7888__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__28441){
var mesg = cljs.core.seq(arglist__28441);
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
log.cljs$lang$applyTo = (function (arglist__28442){
var mesg = cljs.core.seq(arglist__28442);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28443){
var contents = cljs.core.seq(arglist__28443);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28444_SHARP_){return p1__28444_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28445_SHARP_,p2__28446_SHARP_){return goog.dom.insertChildAt(p1__28445_SHARP_,p2__28446_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28448_SHARP_,p2__28447_SHARP_){return goog.dom.insertSiblingBefore(p2__28447_SHARP_,p1__28448_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28450_SHARP_,p2__28449_SHARP_){return goog.dom.insertSiblingAfter(p2__28449_SHARP_,p1__28450_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28452_SHARP_,p2__28451_SHARP_){return goog.dom.replaceNode(p2__28451_SHARP_,p1__28452_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28457_28461 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28458_28462 = null;var count__28459_28463 = (0);var i__28460_28464 = (0);while(true){
if((i__28460_28464 < count__28459_28463))
{var n_28465 = cljs.core._nth.call(null,chunk__28458_28462,i__28460_28464);goog.style.setStyle(n_28465,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28466 = seq__28457_28461;
var G__28467 = chunk__28458_28462;
var G__28468 = count__28459_28463;
var G__28469 = (i__28460_28464 + (1));
seq__28457_28461 = G__28466;
chunk__28458_28462 = G__28467;
count__28459_28463 = G__28468;
i__28460_28464 = G__28469;
continue;
}
} else
{var temp__4126__auto___28470 = cljs.core.seq.call(null,seq__28457_28461);if(temp__4126__auto___28470)
{var seq__28457_28471__$1 = temp__4126__auto___28470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28457_28471__$1))
{var c__8656__auto___28472 = cljs.core.chunk_first.call(null,seq__28457_28471__$1);{
var G__28473 = cljs.core.chunk_rest.call(null,seq__28457_28471__$1);
var G__28474 = c__8656__auto___28472;
var G__28475 = cljs.core.count.call(null,c__8656__auto___28472);
var G__28476 = (0);
seq__28457_28461 = G__28473;
chunk__28458_28462 = G__28474;
count__28459_28463 = G__28475;
i__28460_28464 = G__28476;
continue;
}
} else
{var n_28477 = cljs.core.first.call(null,seq__28457_28471__$1);goog.style.setStyle(n_28477,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28478 = cljs.core.next.call(null,seq__28457_28471__$1);
var G__28479 = null;
var G__28480 = (0);
var G__28481 = (0);
seq__28457_28461 = G__28478;
chunk__28458_28462 = G__28479;
count__28459_28463 = G__28480;
i__28460_28464 = G__28481;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28482){
var content = cljs.core.first(arglist__28482);
arglist__28482 = cljs.core.next(arglist__28482);
var name = cljs.core.first(arglist__28482);
var value = cljs.core.rest(arglist__28482);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28487_28491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28488_28492 = null;var count__28489_28493 = (0);var i__28490_28494 = (0);while(true){
if((i__28490_28494 < count__28489_28493))
{var n_28495 = cljs.core._nth.call(null,chunk__28488_28492,i__28490_28494);n_28495.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28496 = seq__28487_28491;
var G__28497 = chunk__28488_28492;
var G__28498 = count__28489_28493;
var G__28499 = (i__28490_28494 + (1));
seq__28487_28491 = G__28496;
chunk__28488_28492 = G__28497;
count__28489_28493 = G__28498;
i__28490_28494 = G__28499;
continue;
}
} else
{var temp__4126__auto___28500 = cljs.core.seq.call(null,seq__28487_28491);if(temp__4126__auto___28500)
{var seq__28487_28501__$1 = temp__4126__auto___28500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28487_28501__$1))
{var c__8656__auto___28502 = cljs.core.chunk_first.call(null,seq__28487_28501__$1);{
var G__28503 = cljs.core.chunk_rest.call(null,seq__28487_28501__$1);
var G__28504 = c__8656__auto___28502;
var G__28505 = cljs.core.count.call(null,c__8656__auto___28502);
var G__28506 = (0);
seq__28487_28491 = G__28503;
chunk__28488_28492 = G__28504;
count__28489_28493 = G__28505;
i__28490_28494 = G__28506;
continue;
}
} else
{var n_28507 = cljs.core.first.call(null,seq__28487_28501__$1);n_28507.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28508 = cljs.core.next.call(null,seq__28487_28501__$1);
var G__28509 = null;
var G__28510 = (0);
var G__28511 = (0);
seq__28487_28491 = G__28508;
chunk__28488_28492 = G__28509;
count__28489_28493 = G__28510;
i__28490_28494 = G__28511;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28512){
var content = cljs.core.first(arglist__28512);
arglist__28512 = cljs.core.next(arglist__28512);
var name = cljs.core.first(arglist__28512);
var value = cljs.core.rest(arglist__28512);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28517_28521 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28518_28522 = null;var count__28519_28523 = (0);var i__28520_28524 = (0);while(true){
if((i__28520_28524 < count__28519_28523))
{var n_28525 = cljs.core._nth.call(null,chunk__28518_28522,i__28520_28524);n_28525.removeAttribute(cljs.core.name.call(null,name));
{
var G__28526 = seq__28517_28521;
var G__28527 = chunk__28518_28522;
var G__28528 = count__28519_28523;
var G__28529 = (i__28520_28524 + (1));
seq__28517_28521 = G__28526;
chunk__28518_28522 = G__28527;
count__28519_28523 = G__28528;
i__28520_28524 = G__28529;
continue;
}
} else
{var temp__4126__auto___28530 = cljs.core.seq.call(null,seq__28517_28521);if(temp__4126__auto___28530)
{var seq__28517_28531__$1 = temp__4126__auto___28530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28517_28531__$1))
{var c__8656__auto___28532 = cljs.core.chunk_first.call(null,seq__28517_28531__$1);{
var G__28533 = cljs.core.chunk_rest.call(null,seq__28517_28531__$1);
var G__28534 = c__8656__auto___28532;
var G__28535 = cljs.core.count.call(null,c__8656__auto___28532);
var G__28536 = (0);
seq__28517_28521 = G__28533;
chunk__28518_28522 = G__28534;
count__28519_28523 = G__28535;
i__28520_28524 = G__28536;
continue;
}
} else
{var n_28537 = cljs.core.first.call(null,seq__28517_28531__$1);n_28537.removeAttribute(cljs.core.name.call(null,name));
{
var G__28538 = cljs.core.next.call(null,seq__28517_28531__$1);
var G__28539 = null;
var G__28540 = (0);
var G__28541 = (0);
seq__28517_28521 = G__28538;
chunk__28518_28522 = G__28539;
count__28519_28523 = G__28540;
i__28520_28524 = G__28541;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28543 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28543,(0),null);var v = cljs.core.nth.call(null,vec__28543,(1),null);if(cljs.core.truth_((function (){var and__7888__auto__ = k;if(cljs.core.truth_(and__7888__auto__))
{return v;
} else
{return and__7888__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__28544_SHARP_){var attr = attrs__$1.item(p1__28544_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28551_28557 = cljs.core.seq.call(null,styles);var chunk__28552_28558 = null;var count__28553_28559 = (0);var i__28554_28560 = (0);while(true){
if((i__28554_28560 < count__28553_28559))
{var vec__28555_28561 = cljs.core._nth.call(null,chunk__28552_28558,i__28554_28560);var name_28562 = cljs.core.nth.call(null,vec__28555_28561,(0),null);var value_28563 = cljs.core.nth.call(null,vec__28555_28561,(1),null);domina.set_style_BANG_.call(null,content,name_28562,value_28563);
{
var G__28564 = seq__28551_28557;
var G__28565 = chunk__28552_28558;
var G__28566 = count__28553_28559;
var G__28567 = (i__28554_28560 + (1));
seq__28551_28557 = G__28564;
chunk__28552_28558 = G__28565;
count__28553_28559 = G__28566;
i__28554_28560 = G__28567;
continue;
}
} else
{var temp__4126__auto___28568 = cljs.core.seq.call(null,seq__28551_28557);if(temp__4126__auto___28568)
{var seq__28551_28569__$1 = temp__4126__auto___28568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28551_28569__$1))
{var c__8656__auto___28570 = cljs.core.chunk_first.call(null,seq__28551_28569__$1);{
var G__28571 = cljs.core.chunk_rest.call(null,seq__28551_28569__$1);
var G__28572 = c__8656__auto___28570;
var G__28573 = cljs.core.count.call(null,c__8656__auto___28570);
var G__28574 = (0);
seq__28551_28557 = G__28571;
chunk__28552_28558 = G__28572;
count__28553_28559 = G__28573;
i__28554_28560 = G__28574;
continue;
}
} else
{var vec__28556_28575 = cljs.core.first.call(null,seq__28551_28569__$1);var name_28576 = cljs.core.nth.call(null,vec__28556_28575,(0),null);var value_28577 = cljs.core.nth.call(null,vec__28556_28575,(1),null);domina.set_style_BANG_.call(null,content,name_28576,value_28577);
{
var G__28578 = cljs.core.next.call(null,seq__28551_28569__$1);
var G__28579 = null;
var G__28580 = (0);
var G__28581 = (0);
seq__28551_28557 = G__28578;
chunk__28552_28558 = G__28579;
count__28553_28559 = G__28580;
i__28554_28560 = G__28581;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28588_28594 = cljs.core.seq.call(null,attrs);var chunk__28589_28595 = null;var count__28590_28596 = (0);var i__28591_28597 = (0);while(true){
if((i__28591_28597 < count__28590_28596))
{var vec__28592_28598 = cljs.core._nth.call(null,chunk__28589_28595,i__28591_28597);var name_28599 = cljs.core.nth.call(null,vec__28592_28598,(0),null);var value_28600 = cljs.core.nth.call(null,vec__28592_28598,(1),null);domina.set_attr_BANG_.call(null,content,name_28599,value_28600);
{
var G__28601 = seq__28588_28594;
var G__28602 = chunk__28589_28595;
var G__28603 = count__28590_28596;
var G__28604 = (i__28591_28597 + (1));
seq__28588_28594 = G__28601;
chunk__28589_28595 = G__28602;
count__28590_28596 = G__28603;
i__28591_28597 = G__28604;
continue;
}
} else
{var temp__4126__auto___28605 = cljs.core.seq.call(null,seq__28588_28594);if(temp__4126__auto___28605)
{var seq__28588_28606__$1 = temp__4126__auto___28605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28588_28606__$1))
{var c__8656__auto___28607 = cljs.core.chunk_first.call(null,seq__28588_28606__$1);{
var G__28608 = cljs.core.chunk_rest.call(null,seq__28588_28606__$1);
var G__28609 = c__8656__auto___28607;
var G__28610 = cljs.core.count.call(null,c__8656__auto___28607);
var G__28611 = (0);
seq__28588_28594 = G__28608;
chunk__28589_28595 = G__28609;
count__28590_28596 = G__28610;
i__28591_28597 = G__28611;
continue;
}
} else
{var vec__28593_28612 = cljs.core.first.call(null,seq__28588_28606__$1);var name_28613 = cljs.core.nth.call(null,vec__28593_28612,(0),null);var value_28614 = cljs.core.nth.call(null,vec__28593_28612,(1),null);domina.set_attr_BANG_.call(null,content,name_28613,value_28614);
{
var G__28615 = cljs.core.next.call(null,seq__28588_28606__$1);
var G__28616 = null;
var G__28617 = (0);
var G__28618 = (0);
seq__28588_28594 = G__28615;
chunk__28589_28595 = G__28616;
count__28590_28596 = G__28617;
i__28591_28597 = G__28618;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28623_28627 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28624_28628 = null;var count__28625_28629 = (0);var i__28626_28630 = (0);while(true){
if((i__28626_28630 < count__28625_28629))
{var node_28631 = cljs.core._nth.call(null,chunk__28624_28628,i__28626_28630);goog.dom.classes.add(node_28631,class$);
{
var G__28632 = seq__28623_28627;
var G__28633 = chunk__28624_28628;
var G__28634 = count__28625_28629;
var G__28635 = (i__28626_28630 + (1));
seq__28623_28627 = G__28632;
chunk__28624_28628 = G__28633;
count__28625_28629 = G__28634;
i__28626_28630 = G__28635;
continue;
}
} else
{var temp__4126__auto___28636 = cljs.core.seq.call(null,seq__28623_28627);if(temp__4126__auto___28636)
{var seq__28623_28637__$1 = temp__4126__auto___28636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28623_28637__$1))
{var c__8656__auto___28638 = cljs.core.chunk_first.call(null,seq__28623_28637__$1);{
var G__28639 = cljs.core.chunk_rest.call(null,seq__28623_28637__$1);
var G__28640 = c__8656__auto___28638;
var G__28641 = cljs.core.count.call(null,c__8656__auto___28638);
var G__28642 = (0);
seq__28623_28627 = G__28639;
chunk__28624_28628 = G__28640;
count__28625_28629 = G__28641;
i__28626_28630 = G__28642;
continue;
}
} else
{var node_28643 = cljs.core.first.call(null,seq__28623_28637__$1);goog.dom.classes.add(node_28643,class$);
{
var G__28644 = cljs.core.next.call(null,seq__28623_28637__$1);
var G__28645 = null;
var G__28646 = (0);
var G__28647 = (0);
seq__28623_28627 = G__28644;
chunk__28624_28628 = G__28645;
count__28625_28629 = G__28646;
i__28626_28630 = G__28647;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28652_28656 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28653_28657 = null;var count__28654_28658 = (0);var i__28655_28659 = (0);while(true){
if((i__28655_28659 < count__28654_28658))
{var node_28660 = cljs.core._nth.call(null,chunk__28653_28657,i__28655_28659);goog.dom.classes.remove(node_28660,class$);
{
var G__28661 = seq__28652_28656;
var G__28662 = chunk__28653_28657;
var G__28663 = count__28654_28658;
var G__28664 = (i__28655_28659 + (1));
seq__28652_28656 = G__28661;
chunk__28653_28657 = G__28662;
count__28654_28658 = G__28663;
i__28655_28659 = G__28664;
continue;
}
} else
{var temp__4126__auto___28665 = cljs.core.seq.call(null,seq__28652_28656);if(temp__4126__auto___28665)
{var seq__28652_28666__$1 = temp__4126__auto___28665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28652_28666__$1))
{var c__8656__auto___28667 = cljs.core.chunk_first.call(null,seq__28652_28666__$1);{
var G__28668 = cljs.core.chunk_rest.call(null,seq__28652_28666__$1);
var G__28669 = c__8656__auto___28667;
var G__28670 = cljs.core.count.call(null,c__8656__auto___28667);
var G__28671 = (0);
seq__28652_28656 = G__28668;
chunk__28653_28657 = G__28669;
count__28654_28658 = G__28670;
i__28655_28659 = G__28671;
continue;
}
} else
{var node_28672 = cljs.core.first.call(null,seq__28652_28666__$1);goog.dom.classes.remove(node_28672,class$);
{
var G__28673 = cljs.core.next.call(null,seq__28652_28666__$1);
var G__28674 = null;
var G__28675 = (0);
var G__28676 = (0);
seq__28652_28656 = G__28673;
chunk__28653_28657 = G__28674;
count__28654_28658 = G__28675;
i__28655_28659 = G__28676;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28681_28685 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28682_28686 = null;var count__28683_28687 = (0);var i__28684_28688 = (0);while(true){
if((i__28684_28688 < count__28683_28687))
{var node_28689 = cljs.core._nth.call(null,chunk__28682_28686,i__28684_28688);goog.dom.classes.toggle(node_28689,class$);
{
var G__28690 = seq__28681_28685;
var G__28691 = chunk__28682_28686;
var G__28692 = count__28683_28687;
var G__28693 = (i__28684_28688 + (1));
seq__28681_28685 = G__28690;
chunk__28682_28686 = G__28691;
count__28683_28687 = G__28692;
i__28684_28688 = G__28693;
continue;
}
} else
{var temp__4126__auto___28694 = cljs.core.seq.call(null,seq__28681_28685);if(temp__4126__auto___28694)
{var seq__28681_28695__$1 = temp__4126__auto___28694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28681_28695__$1))
{var c__8656__auto___28696 = cljs.core.chunk_first.call(null,seq__28681_28695__$1);{
var G__28697 = cljs.core.chunk_rest.call(null,seq__28681_28695__$1);
var G__28698 = c__8656__auto___28696;
var G__28699 = cljs.core.count.call(null,c__8656__auto___28696);
var G__28700 = (0);
seq__28681_28685 = G__28697;
chunk__28682_28686 = G__28698;
count__28683_28687 = G__28699;
i__28684_28688 = G__28700;
continue;
}
} else
{var node_28701 = cljs.core.first.call(null,seq__28681_28695__$1);goog.dom.classes.toggle(node_28701,class$);
{
var G__28702 = cljs.core.next.call(null,seq__28681_28695__$1);
var G__28703 = null;
var G__28704 = (0);
var G__28705 = (0);
seq__28681_28685 = G__28702;
chunk__28682_28686 = G__28703;
count__28683_28687 = G__28704;
i__28684_28688 = G__28705;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28714__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28710_28715 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28711_28716 = null;var count__28712_28717 = (0);var i__28713_28718 = (0);while(true){
if((i__28713_28718 < count__28712_28717))
{var node_28719 = cljs.core._nth.call(null,chunk__28711_28716,i__28713_28718);goog.dom.classes.set(node_28719,classes_28714__$1);
{
var G__28720 = seq__28710_28715;
var G__28721 = chunk__28711_28716;
var G__28722 = count__28712_28717;
var G__28723 = (i__28713_28718 + (1));
seq__28710_28715 = G__28720;
chunk__28711_28716 = G__28721;
count__28712_28717 = G__28722;
i__28713_28718 = G__28723;
continue;
}
} else
{var temp__4126__auto___28724 = cljs.core.seq.call(null,seq__28710_28715);if(temp__4126__auto___28724)
{var seq__28710_28725__$1 = temp__4126__auto___28724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28710_28725__$1))
{var c__8656__auto___28726 = cljs.core.chunk_first.call(null,seq__28710_28725__$1);{
var G__28727 = cljs.core.chunk_rest.call(null,seq__28710_28725__$1);
var G__28728 = c__8656__auto___28726;
var G__28729 = cljs.core.count.call(null,c__8656__auto___28726);
var G__28730 = (0);
seq__28710_28715 = G__28727;
chunk__28711_28716 = G__28728;
count__28712_28717 = G__28729;
i__28713_28718 = G__28730;
continue;
}
} else
{var node_28731 = cljs.core.first.call(null,seq__28710_28725__$1);goog.dom.classes.set(node_28731,classes_28714__$1);
{
var G__28732 = cljs.core.next.call(null,seq__28710_28725__$1);
var G__28733 = null;
var G__28734 = (0);
var G__28735 = (0);
seq__28710_28715 = G__28732;
chunk__28711_28716 = G__28733;
count__28712_28717 = G__28734;
i__28713_28718 = G__28735;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28740_28744 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28741_28745 = null;var count__28742_28746 = (0);var i__28743_28747 = (0);while(true){
if((i__28743_28747 < count__28742_28746))
{var node_28748 = cljs.core._nth.call(null,chunk__28741_28745,i__28743_28747);goog.dom.setTextContent(node_28748,value);
{
var G__28749 = seq__28740_28744;
var G__28750 = chunk__28741_28745;
var G__28751 = count__28742_28746;
var G__28752 = (i__28743_28747 + (1));
seq__28740_28744 = G__28749;
chunk__28741_28745 = G__28750;
count__28742_28746 = G__28751;
i__28743_28747 = G__28752;
continue;
}
} else
{var temp__4126__auto___28753 = cljs.core.seq.call(null,seq__28740_28744);if(temp__4126__auto___28753)
{var seq__28740_28754__$1 = temp__4126__auto___28753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28740_28754__$1))
{var c__8656__auto___28755 = cljs.core.chunk_first.call(null,seq__28740_28754__$1);{
var G__28756 = cljs.core.chunk_rest.call(null,seq__28740_28754__$1);
var G__28757 = c__8656__auto___28755;
var G__28758 = cljs.core.count.call(null,c__8656__auto___28755);
var G__28759 = (0);
seq__28740_28744 = G__28756;
chunk__28741_28745 = G__28757;
count__28742_28746 = G__28758;
i__28743_28747 = G__28759;
continue;
}
} else
{var node_28760 = cljs.core.first.call(null,seq__28740_28754__$1);goog.dom.setTextContent(node_28760,value);
{
var G__28761 = cljs.core.next.call(null,seq__28740_28754__$1);
var G__28762 = null;
var G__28763 = (0);
var G__28764 = (0);
seq__28740_28744 = G__28761;
chunk__28741_28745 = G__28762;
count__28742_28746 = G__28763;
i__28743_28747 = G__28764;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28769_28773 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28770_28774 = null;var count__28771_28775 = (0);var i__28772_28776 = (0);while(true){
if((i__28772_28776 < count__28771_28775))
{var node_28777 = cljs.core._nth.call(null,chunk__28770_28774,i__28772_28776);goog.dom.forms.setValue(node_28777,value);
{
var G__28778 = seq__28769_28773;
var G__28779 = chunk__28770_28774;
var G__28780 = count__28771_28775;
var G__28781 = (i__28772_28776 + (1));
seq__28769_28773 = G__28778;
chunk__28770_28774 = G__28779;
count__28771_28775 = G__28780;
i__28772_28776 = G__28781;
continue;
}
} else
{var temp__4126__auto___28782 = cljs.core.seq.call(null,seq__28769_28773);if(temp__4126__auto___28782)
{var seq__28769_28783__$1 = temp__4126__auto___28782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28769_28783__$1))
{var c__8656__auto___28784 = cljs.core.chunk_first.call(null,seq__28769_28783__$1);{
var G__28785 = cljs.core.chunk_rest.call(null,seq__28769_28783__$1);
var G__28786 = c__8656__auto___28784;
var G__28787 = cljs.core.count.call(null,c__8656__auto___28784);
var G__28788 = (0);
seq__28769_28773 = G__28785;
chunk__28770_28774 = G__28786;
count__28771_28775 = G__28787;
i__28772_28776 = G__28788;
continue;
}
} else
{var node_28789 = cljs.core.first.call(null,seq__28769_28783__$1);goog.dom.forms.setValue(node_28789,value);
{
var G__28790 = cljs.core.next.call(null,seq__28769_28783__$1);
var G__28791 = null;
var G__28792 = (0);
var G__28793 = (0);
seq__28769_28773 = G__28790;
chunk__28770_28774 = G__28791;
count__28771_28775 = G__28792;
i__28772_28776 = G__28793;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__7888__auto__ = allows_inner_html_QMARK_;if(and__7888__auto__)
{var and__7888__auto____$1 = (function (){var or__7900__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__7888__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__7888__auto____$1;
}
} else
{return and__7888__auto__;
}
})()))
{var value_28804 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28800_28805 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28801_28806 = null;var count__28802_28807 = (0);var i__28803_28808 = (0);while(true){
if((i__28803_28808 < count__28802_28807))
{var node_28809 = cljs.core._nth.call(null,chunk__28801_28806,i__28803_28808);node_28809.innerHTML = value_28804;
{
var G__28810 = seq__28800_28805;
var G__28811 = chunk__28801_28806;
var G__28812 = count__28802_28807;
var G__28813 = (i__28803_28808 + (1));
seq__28800_28805 = G__28810;
chunk__28801_28806 = G__28811;
count__28802_28807 = G__28812;
i__28803_28808 = G__28813;
continue;
}
} else
{var temp__4126__auto___28814 = cljs.core.seq.call(null,seq__28800_28805);if(temp__4126__auto___28814)
{var seq__28800_28815__$1 = temp__4126__auto___28814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28800_28815__$1))
{var c__8656__auto___28816 = cljs.core.chunk_first.call(null,seq__28800_28815__$1);{
var G__28817 = cljs.core.chunk_rest.call(null,seq__28800_28815__$1);
var G__28818 = c__8656__auto___28816;
var G__28819 = cljs.core.count.call(null,c__8656__auto___28816);
var G__28820 = (0);
seq__28800_28805 = G__28817;
chunk__28801_28806 = G__28818;
count__28802_28807 = G__28819;
i__28803_28808 = G__28820;
continue;
}
} else
{var node_28821 = cljs.core.first.call(null,seq__28800_28815__$1);node_28821.innerHTML = value_28804;
{
var G__28822 = cljs.core.next.call(null,seq__28800_28815__$1);
var G__28823 = null;
var G__28824 = (0);
var G__28825 = (0);
seq__28800_28805 = G__28822;
chunk__28801_28806 = G__28823;
count__28802_28807 = G__28824;
i__28803_28808 = G__28825;
continue;
}
}
} else
{}
}
break;
}
}catch (e28799){if((e28799 instanceof Error))
{var e_28826 = e28799;domina.replace_children_BANG_.call(null,content,value_28804);
} else
{throw e28799;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__7888__auto__ = bubble;if(cljs.core.truth_(and__7888__auto__))
{return (value == null);
} else
{return and__7888__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__7900__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28833_28837 = cljs.core.seq.call(null,children);var chunk__28834_28838 = null;var count__28835_28839 = (0);var i__28836_28840 = (0);while(true){
if((i__28836_28840 < count__28835_28839))
{var child_28841 = cljs.core._nth.call(null,chunk__28834_28838,i__28836_28840);frag.appendChild(child_28841);
{
var G__28842 = seq__28833_28837;
var G__28843 = chunk__28834_28838;
var G__28844 = count__28835_28839;
var G__28845 = (i__28836_28840 + (1));
seq__28833_28837 = G__28842;
chunk__28834_28838 = G__28843;
count__28835_28839 = G__28844;
i__28836_28840 = G__28845;
continue;
}
} else
{var temp__4126__auto___28846 = cljs.core.seq.call(null,seq__28833_28837);if(temp__4126__auto___28846)
{var seq__28833_28847__$1 = temp__4126__auto___28846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28833_28847__$1))
{var c__8656__auto___28848 = cljs.core.chunk_first.call(null,seq__28833_28847__$1);{
var G__28849 = cljs.core.chunk_rest.call(null,seq__28833_28847__$1);
var G__28850 = c__8656__auto___28848;
var G__28851 = cljs.core.count.call(null,c__8656__auto___28848);
var G__28852 = (0);
seq__28833_28837 = G__28849;
chunk__28834_28838 = G__28850;
count__28835_28839 = G__28851;
i__28836_28840 = G__28852;
continue;
}
} else
{var child_28853 = cljs.core.first.call(null,seq__28833_28847__$1);frag.appendChild(child_28853);
{
var G__28854 = cljs.core.next.call(null,seq__28833_28847__$1);
var G__28855 = null;
var G__28856 = (0);
var G__28857 = (0);
seq__28833_28837 = G__28854;
chunk__28834_28838 = G__28855;
count__28835_28839 = G__28856;
i__28836_28840 = G__28857;
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
return (function (p1__28827_SHARP_,p2__28828_SHARP_){return f.call(null,p1__28827_SHARP_,p2__28828_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__7888__auto__ = obj;if(cljs.core.truth_(and__7888__auto__))
{var and__7888__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__7888__auto____$1)
{return obj.length;
} else
{return and__7888__auto____$1;
}
} else
{return and__7888__auto__;
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
{if((function (){var G__28859 = list_thing;if(G__28859)
{var bit__8550__auto__ = (G__28859.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__8550__auto__) || (G__28859.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28859.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28859);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28859);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__28860 = content;if(G__28860)
{var bit__8550__auto__ = (G__28860.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__8550__auto__) || (G__28860.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28860.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28860);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28860);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__28861 = content;if(G__28861)
{var bit__8550__auto__ = (G__28861.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__8550__auto__) || (G__28861.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28861.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28861);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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

//# sourceMappingURL=domina.js.map