// Compiled by ClojureScript 0.0-2261
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
var opt_wrapper_54320 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_54321 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_54322 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_54322,opt_wrapper_54320,table_section_wrapper_54321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_54320,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_54321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_54321,cell_wrapper_54322,table_section_wrapper_54321,table_section_wrapper_54321]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__54327 = cljs.core.seq.call(null,tbody);var chunk__54328 = null;var count__54329 = (0);var i__54330 = (0);while(true){
if((i__54330 < count__54329))
{var child = cljs.core._nth.call(null,chunk__54328,i__54330);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54331 = seq__54327;
var G__54332 = chunk__54328;
var G__54333 = count__54329;
var G__54334 = (i__54330 + (1));
seq__54327 = G__54331;
chunk__54328 = G__54332;
count__54329 = G__54333;
i__54330 = G__54334;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54327);if(temp__4126__auto__)
{var seq__54327__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54327__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__54327__$1);{
var G__54335 = cljs.core.chunk_rest.call(null,seq__54327__$1);
var G__54336 = c__4299__auto__;
var G__54337 = cljs.core.count.call(null,c__4299__auto__);
var G__54338 = (0);
seq__54327 = G__54335;
chunk__54328 = G__54336;
count__54329 = G__54337;
i__54330 = G__54338;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__54327__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54339 = cljs.core.next.call(null,seq__54327__$1);
var G__54340 = null;
var G__54341 = (0);
var G__54342 = (0);
seq__54327 = G__54339;
chunk__54328 = G__54340;
count__54329 = G__54341;
i__54330 = G__54342;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__54344 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__54344,(0),null);var start_wrap = cljs.core.nth.call(null,vec__54344,(1),null);var end_wrap = cljs.core.nth.call(null,vec__54344,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__54345 = wrapper.lastChild;
var G__54346 = (level - (1));
wrapper = G__54345;
level = G__54346;
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
domina.DomContent = (function (){var obj54348 = {};return obj54348;
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
log_debug.cljs$lang$applyTo = (function (arglist__54349){
var mesg = cljs.core.seq(arglist__54349);
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
log.cljs$lang$applyTo = (function (arglist__54350){
var mesg = cljs.core.seq(arglist__54350);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__54351){
var contents = cljs.core.seq(arglist__54351);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__54352_SHARP_){return p1__54352_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__54353_SHARP_,p2__54354_SHARP_){return goog.dom.insertChildAt(p1__54353_SHARP_,p2__54354_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__54356_SHARP_,p2__54355_SHARP_){return goog.dom.insertSiblingBefore(p2__54355_SHARP_,p1__54356_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__54358_SHARP_,p2__54357_SHARP_){return goog.dom.insertSiblingAfter(p2__54357_SHARP_,p1__54358_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__54360_SHARP_,p2__54359_SHARP_){return goog.dom.replaceNode(p2__54359_SHARP_,p1__54360_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__54365_54369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54366_54370 = null;var count__54367_54371 = (0);var i__54368_54372 = (0);while(true){
if((i__54368_54372 < count__54367_54371))
{var n_54373 = cljs.core._nth.call(null,chunk__54366_54370,i__54368_54372);goog.style.setStyle(n_54373,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54374 = seq__54365_54369;
var G__54375 = chunk__54366_54370;
var G__54376 = count__54367_54371;
var G__54377 = (i__54368_54372 + (1));
seq__54365_54369 = G__54374;
chunk__54366_54370 = G__54375;
count__54367_54371 = G__54376;
i__54368_54372 = G__54377;
continue;
}
} else
{var temp__4126__auto___54378 = cljs.core.seq.call(null,seq__54365_54369);if(temp__4126__auto___54378)
{var seq__54365_54379__$1 = temp__4126__auto___54378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54365_54379__$1))
{var c__4299__auto___54380 = cljs.core.chunk_first.call(null,seq__54365_54379__$1);{
var G__54381 = cljs.core.chunk_rest.call(null,seq__54365_54379__$1);
var G__54382 = c__4299__auto___54380;
var G__54383 = cljs.core.count.call(null,c__4299__auto___54380);
var G__54384 = (0);
seq__54365_54369 = G__54381;
chunk__54366_54370 = G__54382;
count__54367_54371 = G__54383;
i__54368_54372 = G__54384;
continue;
}
} else
{var n_54385 = cljs.core.first.call(null,seq__54365_54379__$1);goog.style.setStyle(n_54385,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54386 = cljs.core.next.call(null,seq__54365_54379__$1);
var G__54387 = null;
var G__54388 = (0);
var G__54389 = (0);
seq__54365_54369 = G__54386;
chunk__54366_54370 = G__54387;
count__54367_54371 = G__54388;
i__54368_54372 = G__54389;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__54390){
var content = cljs.core.first(arglist__54390);
arglist__54390 = cljs.core.next(arglist__54390);
var name = cljs.core.first(arglist__54390);
var value = cljs.core.rest(arglist__54390);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__54395_54399 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54396_54400 = null;var count__54397_54401 = (0);var i__54398_54402 = (0);while(true){
if((i__54398_54402 < count__54397_54401))
{var n_54403 = cljs.core._nth.call(null,chunk__54396_54400,i__54398_54402);n_54403.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54404 = seq__54395_54399;
var G__54405 = chunk__54396_54400;
var G__54406 = count__54397_54401;
var G__54407 = (i__54398_54402 + (1));
seq__54395_54399 = G__54404;
chunk__54396_54400 = G__54405;
count__54397_54401 = G__54406;
i__54398_54402 = G__54407;
continue;
}
} else
{var temp__4126__auto___54408 = cljs.core.seq.call(null,seq__54395_54399);if(temp__4126__auto___54408)
{var seq__54395_54409__$1 = temp__4126__auto___54408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54395_54409__$1))
{var c__4299__auto___54410 = cljs.core.chunk_first.call(null,seq__54395_54409__$1);{
var G__54411 = cljs.core.chunk_rest.call(null,seq__54395_54409__$1);
var G__54412 = c__4299__auto___54410;
var G__54413 = cljs.core.count.call(null,c__4299__auto___54410);
var G__54414 = (0);
seq__54395_54399 = G__54411;
chunk__54396_54400 = G__54412;
count__54397_54401 = G__54413;
i__54398_54402 = G__54414;
continue;
}
} else
{var n_54415 = cljs.core.first.call(null,seq__54395_54409__$1);n_54415.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54416 = cljs.core.next.call(null,seq__54395_54409__$1);
var G__54417 = null;
var G__54418 = (0);
var G__54419 = (0);
seq__54395_54399 = G__54416;
chunk__54396_54400 = G__54417;
count__54397_54401 = G__54418;
i__54398_54402 = G__54419;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__54420){
var content = cljs.core.first(arglist__54420);
arglist__54420 = cljs.core.next(arglist__54420);
var name = cljs.core.first(arglist__54420);
var value = cljs.core.rest(arglist__54420);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__54425_54429 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54426_54430 = null;var count__54427_54431 = (0);var i__54428_54432 = (0);while(true){
if((i__54428_54432 < count__54427_54431))
{var n_54433 = cljs.core._nth.call(null,chunk__54426_54430,i__54428_54432);n_54433.removeAttribute(cljs.core.name.call(null,name));
{
var G__54434 = seq__54425_54429;
var G__54435 = chunk__54426_54430;
var G__54436 = count__54427_54431;
var G__54437 = (i__54428_54432 + (1));
seq__54425_54429 = G__54434;
chunk__54426_54430 = G__54435;
count__54427_54431 = G__54436;
i__54428_54432 = G__54437;
continue;
}
} else
{var temp__4126__auto___54438 = cljs.core.seq.call(null,seq__54425_54429);if(temp__4126__auto___54438)
{var seq__54425_54439__$1 = temp__4126__auto___54438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54425_54439__$1))
{var c__4299__auto___54440 = cljs.core.chunk_first.call(null,seq__54425_54439__$1);{
var G__54441 = cljs.core.chunk_rest.call(null,seq__54425_54439__$1);
var G__54442 = c__4299__auto___54440;
var G__54443 = cljs.core.count.call(null,c__4299__auto___54440);
var G__54444 = (0);
seq__54425_54429 = G__54441;
chunk__54426_54430 = G__54442;
count__54427_54431 = G__54443;
i__54428_54432 = G__54444;
continue;
}
} else
{var n_54445 = cljs.core.first.call(null,seq__54425_54439__$1);n_54445.removeAttribute(cljs.core.name.call(null,name));
{
var G__54446 = cljs.core.next.call(null,seq__54425_54439__$1);
var G__54447 = null;
var G__54448 = (0);
var G__54449 = (0);
seq__54425_54429 = G__54446;
chunk__54426_54430 = G__54447;
count__54427_54431 = G__54448;
i__54428_54432 = G__54449;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__54451 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__54451,(0),null);var v = cljs.core.nth.call(null,vec__54451,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__54452_SHARP_){var attr = attrs__$1.item(p1__54452_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__54459_54465 = cljs.core.seq.call(null,styles);var chunk__54460_54466 = null;var count__54461_54467 = (0);var i__54462_54468 = (0);while(true){
if((i__54462_54468 < count__54461_54467))
{var vec__54463_54469 = cljs.core._nth.call(null,chunk__54460_54466,i__54462_54468);var name_54470 = cljs.core.nth.call(null,vec__54463_54469,(0),null);var value_54471 = cljs.core.nth.call(null,vec__54463_54469,(1),null);domina.set_style_BANG_.call(null,content,name_54470,value_54471);
{
var G__54472 = seq__54459_54465;
var G__54473 = chunk__54460_54466;
var G__54474 = count__54461_54467;
var G__54475 = (i__54462_54468 + (1));
seq__54459_54465 = G__54472;
chunk__54460_54466 = G__54473;
count__54461_54467 = G__54474;
i__54462_54468 = G__54475;
continue;
}
} else
{var temp__4126__auto___54476 = cljs.core.seq.call(null,seq__54459_54465);if(temp__4126__auto___54476)
{var seq__54459_54477__$1 = temp__4126__auto___54476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54459_54477__$1))
{var c__4299__auto___54478 = cljs.core.chunk_first.call(null,seq__54459_54477__$1);{
var G__54479 = cljs.core.chunk_rest.call(null,seq__54459_54477__$1);
var G__54480 = c__4299__auto___54478;
var G__54481 = cljs.core.count.call(null,c__4299__auto___54478);
var G__54482 = (0);
seq__54459_54465 = G__54479;
chunk__54460_54466 = G__54480;
count__54461_54467 = G__54481;
i__54462_54468 = G__54482;
continue;
}
} else
{var vec__54464_54483 = cljs.core.first.call(null,seq__54459_54477__$1);var name_54484 = cljs.core.nth.call(null,vec__54464_54483,(0),null);var value_54485 = cljs.core.nth.call(null,vec__54464_54483,(1),null);domina.set_style_BANG_.call(null,content,name_54484,value_54485);
{
var G__54486 = cljs.core.next.call(null,seq__54459_54477__$1);
var G__54487 = null;
var G__54488 = (0);
var G__54489 = (0);
seq__54459_54465 = G__54486;
chunk__54460_54466 = G__54487;
count__54461_54467 = G__54488;
i__54462_54468 = G__54489;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__54496_54502 = cljs.core.seq.call(null,attrs);var chunk__54497_54503 = null;var count__54498_54504 = (0);var i__54499_54505 = (0);while(true){
if((i__54499_54505 < count__54498_54504))
{var vec__54500_54506 = cljs.core._nth.call(null,chunk__54497_54503,i__54499_54505);var name_54507 = cljs.core.nth.call(null,vec__54500_54506,(0),null);var value_54508 = cljs.core.nth.call(null,vec__54500_54506,(1),null);domina.set_attr_BANG_.call(null,content,name_54507,value_54508);
{
var G__54509 = seq__54496_54502;
var G__54510 = chunk__54497_54503;
var G__54511 = count__54498_54504;
var G__54512 = (i__54499_54505 + (1));
seq__54496_54502 = G__54509;
chunk__54497_54503 = G__54510;
count__54498_54504 = G__54511;
i__54499_54505 = G__54512;
continue;
}
} else
{var temp__4126__auto___54513 = cljs.core.seq.call(null,seq__54496_54502);if(temp__4126__auto___54513)
{var seq__54496_54514__$1 = temp__4126__auto___54513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54496_54514__$1))
{var c__4299__auto___54515 = cljs.core.chunk_first.call(null,seq__54496_54514__$1);{
var G__54516 = cljs.core.chunk_rest.call(null,seq__54496_54514__$1);
var G__54517 = c__4299__auto___54515;
var G__54518 = cljs.core.count.call(null,c__4299__auto___54515);
var G__54519 = (0);
seq__54496_54502 = G__54516;
chunk__54497_54503 = G__54517;
count__54498_54504 = G__54518;
i__54499_54505 = G__54519;
continue;
}
} else
{var vec__54501_54520 = cljs.core.first.call(null,seq__54496_54514__$1);var name_54521 = cljs.core.nth.call(null,vec__54501_54520,(0),null);var value_54522 = cljs.core.nth.call(null,vec__54501_54520,(1),null);domina.set_attr_BANG_.call(null,content,name_54521,value_54522);
{
var G__54523 = cljs.core.next.call(null,seq__54496_54514__$1);
var G__54524 = null;
var G__54525 = (0);
var G__54526 = (0);
seq__54496_54502 = G__54523;
chunk__54497_54503 = G__54524;
count__54498_54504 = G__54525;
i__54499_54505 = G__54526;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__54531_54535 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54532_54536 = null;var count__54533_54537 = (0);var i__54534_54538 = (0);while(true){
if((i__54534_54538 < count__54533_54537))
{var node_54539 = cljs.core._nth.call(null,chunk__54532_54536,i__54534_54538);goog.dom.classes.add(node_54539,class$);
{
var G__54540 = seq__54531_54535;
var G__54541 = chunk__54532_54536;
var G__54542 = count__54533_54537;
var G__54543 = (i__54534_54538 + (1));
seq__54531_54535 = G__54540;
chunk__54532_54536 = G__54541;
count__54533_54537 = G__54542;
i__54534_54538 = G__54543;
continue;
}
} else
{var temp__4126__auto___54544 = cljs.core.seq.call(null,seq__54531_54535);if(temp__4126__auto___54544)
{var seq__54531_54545__$1 = temp__4126__auto___54544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54531_54545__$1))
{var c__4299__auto___54546 = cljs.core.chunk_first.call(null,seq__54531_54545__$1);{
var G__54547 = cljs.core.chunk_rest.call(null,seq__54531_54545__$1);
var G__54548 = c__4299__auto___54546;
var G__54549 = cljs.core.count.call(null,c__4299__auto___54546);
var G__54550 = (0);
seq__54531_54535 = G__54547;
chunk__54532_54536 = G__54548;
count__54533_54537 = G__54549;
i__54534_54538 = G__54550;
continue;
}
} else
{var node_54551 = cljs.core.first.call(null,seq__54531_54545__$1);goog.dom.classes.add(node_54551,class$);
{
var G__54552 = cljs.core.next.call(null,seq__54531_54545__$1);
var G__54553 = null;
var G__54554 = (0);
var G__54555 = (0);
seq__54531_54535 = G__54552;
chunk__54532_54536 = G__54553;
count__54533_54537 = G__54554;
i__54534_54538 = G__54555;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__54560_54564 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54561_54565 = null;var count__54562_54566 = (0);var i__54563_54567 = (0);while(true){
if((i__54563_54567 < count__54562_54566))
{var node_54568 = cljs.core._nth.call(null,chunk__54561_54565,i__54563_54567);goog.dom.classes.remove(node_54568,class$);
{
var G__54569 = seq__54560_54564;
var G__54570 = chunk__54561_54565;
var G__54571 = count__54562_54566;
var G__54572 = (i__54563_54567 + (1));
seq__54560_54564 = G__54569;
chunk__54561_54565 = G__54570;
count__54562_54566 = G__54571;
i__54563_54567 = G__54572;
continue;
}
} else
{var temp__4126__auto___54573 = cljs.core.seq.call(null,seq__54560_54564);if(temp__4126__auto___54573)
{var seq__54560_54574__$1 = temp__4126__auto___54573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54560_54574__$1))
{var c__4299__auto___54575 = cljs.core.chunk_first.call(null,seq__54560_54574__$1);{
var G__54576 = cljs.core.chunk_rest.call(null,seq__54560_54574__$1);
var G__54577 = c__4299__auto___54575;
var G__54578 = cljs.core.count.call(null,c__4299__auto___54575);
var G__54579 = (0);
seq__54560_54564 = G__54576;
chunk__54561_54565 = G__54577;
count__54562_54566 = G__54578;
i__54563_54567 = G__54579;
continue;
}
} else
{var node_54580 = cljs.core.first.call(null,seq__54560_54574__$1);goog.dom.classes.remove(node_54580,class$);
{
var G__54581 = cljs.core.next.call(null,seq__54560_54574__$1);
var G__54582 = null;
var G__54583 = (0);
var G__54584 = (0);
seq__54560_54564 = G__54581;
chunk__54561_54565 = G__54582;
count__54562_54566 = G__54583;
i__54563_54567 = G__54584;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__54589_54593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54590_54594 = null;var count__54591_54595 = (0);var i__54592_54596 = (0);while(true){
if((i__54592_54596 < count__54591_54595))
{var node_54597 = cljs.core._nth.call(null,chunk__54590_54594,i__54592_54596);goog.dom.classes.toggle(node_54597,class$);
{
var G__54598 = seq__54589_54593;
var G__54599 = chunk__54590_54594;
var G__54600 = count__54591_54595;
var G__54601 = (i__54592_54596 + (1));
seq__54589_54593 = G__54598;
chunk__54590_54594 = G__54599;
count__54591_54595 = G__54600;
i__54592_54596 = G__54601;
continue;
}
} else
{var temp__4126__auto___54602 = cljs.core.seq.call(null,seq__54589_54593);if(temp__4126__auto___54602)
{var seq__54589_54603__$1 = temp__4126__auto___54602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54589_54603__$1))
{var c__4299__auto___54604 = cljs.core.chunk_first.call(null,seq__54589_54603__$1);{
var G__54605 = cljs.core.chunk_rest.call(null,seq__54589_54603__$1);
var G__54606 = c__4299__auto___54604;
var G__54607 = cljs.core.count.call(null,c__4299__auto___54604);
var G__54608 = (0);
seq__54589_54593 = G__54605;
chunk__54590_54594 = G__54606;
count__54591_54595 = G__54607;
i__54592_54596 = G__54608;
continue;
}
} else
{var node_54609 = cljs.core.first.call(null,seq__54589_54603__$1);goog.dom.classes.toggle(node_54609,class$);
{
var G__54610 = cljs.core.next.call(null,seq__54589_54603__$1);
var G__54611 = null;
var G__54612 = (0);
var G__54613 = (0);
seq__54589_54593 = G__54610;
chunk__54590_54594 = G__54611;
count__54591_54595 = G__54612;
i__54592_54596 = G__54613;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_54622__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__54618_54623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54619_54624 = null;var count__54620_54625 = (0);var i__54621_54626 = (0);while(true){
if((i__54621_54626 < count__54620_54625))
{var node_54627 = cljs.core._nth.call(null,chunk__54619_54624,i__54621_54626);goog.dom.classes.set(node_54627,classes_54622__$1);
{
var G__54628 = seq__54618_54623;
var G__54629 = chunk__54619_54624;
var G__54630 = count__54620_54625;
var G__54631 = (i__54621_54626 + (1));
seq__54618_54623 = G__54628;
chunk__54619_54624 = G__54629;
count__54620_54625 = G__54630;
i__54621_54626 = G__54631;
continue;
}
} else
{var temp__4126__auto___54632 = cljs.core.seq.call(null,seq__54618_54623);if(temp__4126__auto___54632)
{var seq__54618_54633__$1 = temp__4126__auto___54632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54618_54633__$1))
{var c__4299__auto___54634 = cljs.core.chunk_first.call(null,seq__54618_54633__$1);{
var G__54635 = cljs.core.chunk_rest.call(null,seq__54618_54633__$1);
var G__54636 = c__4299__auto___54634;
var G__54637 = cljs.core.count.call(null,c__4299__auto___54634);
var G__54638 = (0);
seq__54618_54623 = G__54635;
chunk__54619_54624 = G__54636;
count__54620_54625 = G__54637;
i__54621_54626 = G__54638;
continue;
}
} else
{var node_54639 = cljs.core.first.call(null,seq__54618_54633__$1);goog.dom.classes.set(node_54639,classes_54622__$1);
{
var G__54640 = cljs.core.next.call(null,seq__54618_54633__$1);
var G__54641 = null;
var G__54642 = (0);
var G__54643 = (0);
seq__54618_54623 = G__54640;
chunk__54619_54624 = G__54641;
count__54620_54625 = G__54642;
i__54621_54626 = G__54643;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__54648_54652 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54649_54653 = null;var count__54650_54654 = (0);var i__54651_54655 = (0);while(true){
if((i__54651_54655 < count__54650_54654))
{var node_54656 = cljs.core._nth.call(null,chunk__54649_54653,i__54651_54655);goog.dom.setTextContent(node_54656,value);
{
var G__54657 = seq__54648_54652;
var G__54658 = chunk__54649_54653;
var G__54659 = count__54650_54654;
var G__54660 = (i__54651_54655 + (1));
seq__54648_54652 = G__54657;
chunk__54649_54653 = G__54658;
count__54650_54654 = G__54659;
i__54651_54655 = G__54660;
continue;
}
} else
{var temp__4126__auto___54661 = cljs.core.seq.call(null,seq__54648_54652);if(temp__4126__auto___54661)
{var seq__54648_54662__$1 = temp__4126__auto___54661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54648_54662__$1))
{var c__4299__auto___54663 = cljs.core.chunk_first.call(null,seq__54648_54662__$1);{
var G__54664 = cljs.core.chunk_rest.call(null,seq__54648_54662__$1);
var G__54665 = c__4299__auto___54663;
var G__54666 = cljs.core.count.call(null,c__4299__auto___54663);
var G__54667 = (0);
seq__54648_54652 = G__54664;
chunk__54649_54653 = G__54665;
count__54650_54654 = G__54666;
i__54651_54655 = G__54667;
continue;
}
} else
{var node_54668 = cljs.core.first.call(null,seq__54648_54662__$1);goog.dom.setTextContent(node_54668,value);
{
var G__54669 = cljs.core.next.call(null,seq__54648_54662__$1);
var G__54670 = null;
var G__54671 = (0);
var G__54672 = (0);
seq__54648_54652 = G__54669;
chunk__54649_54653 = G__54670;
count__54650_54654 = G__54671;
i__54651_54655 = G__54672;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__54677_54681 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54678_54682 = null;var count__54679_54683 = (0);var i__54680_54684 = (0);while(true){
if((i__54680_54684 < count__54679_54683))
{var node_54685 = cljs.core._nth.call(null,chunk__54678_54682,i__54680_54684);goog.dom.forms.setValue(node_54685,value);
{
var G__54686 = seq__54677_54681;
var G__54687 = chunk__54678_54682;
var G__54688 = count__54679_54683;
var G__54689 = (i__54680_54684 + (1));
seq__54677_54681 = G__54686;
chunk__54678_54682 = G__54687;
count__54679_54683 = G__54688;
i__54680_54684 = G__54689;
continue;
}
} else
{var temp__4126__auto___54690 = cljs.core.seq.call(null,seq__54677_54681);if(temp__4126__auto___54690)
{var seq__54677_54691__$1 = temp__4126__auto___54690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54677_54691__$1))
{var c__4299__auto___54692 = cljs.core.chunk_first.call(null,seq__54677_54691__$1);{
var G__54693 = cljs.core.chunk_rest.call(null,seq__54677_54691__$1);
var G__54694 = c__4299__auto___54692;
var G__54695 = cljs.core.count.call(null,c__4299__auto___54692);
var G__54696 = (0);
seq__54677_54681 = G__54693;
chunk__54678_54682 = G__54694;
count__54679_54683 = G__54695;
i__54680_54684 = G__54696;
continue;
}
} else
{var node_54697 = cljs.core.first.call(null,seq__54677_54691__$1);goog.dom.forms.setValue(node_54697,value);
{
var G__54698 = cljs.core.next.call(null,seq__54677_54691__$1);
var G__54699 = null;
var G__54700 = (0);
var G__54701 = (0);
seq__54677_54681 = G__54698;
chunk__54678_54682 = G__54699;
count__54679_54683 = G__54700;
i__54680_54684 = G__54701;
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
{var value_54712 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__54708_54713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54709_54714 = null;var count__54710_54715 = (0);var i__54711_54716 = (0);while(true){
if((i__54711_54716 < count__54710_54715))
{var node_54717 = cljs.core._nth.call(null,chunk__54709_54714,i__54711_54716);node_54717.innerHTML = value_54712;
{
var G__54718 = seq__54708_54713;
var G__54719 = chunk__54709_54714;
var G__54720 = count__54710_54715;
var G__54721 = (i__54711_54716 + (1));
seq__54708_54713 = G__54718;
chunk__54709_54714 = G__54719;
count__54710_54715 = G__54720;
i__54711_54716 = G__54721;
continue;
}
} else
{var temp__4126__auto___54722 = cljs.core.seq.call(null,seq__54708_54713);if(temp__4126__auto___54722)
{var seq__54708_54723__$1 = temp__4126__auto___54722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54708_54723__$1))
{var c__4299__auto___54724 = cljs.core.chunk_first.call(null,seq__54708_54723__$1);{
var G__54725 = cljs.core.chunk_rest.call(null,seq__54708_54723__$1);
var G__54726 = c__4299__auto___54724;
var G__54727 = cljs.core.count.call(null,c__4299__auto___54724);
var G__54728 = (0);
seq__54708_54713 = G__54725;
chunk__54709_54714 = G__54726;
count__54710_54715 = G__54727;
i__54711_54716 = G__54728;
continue;
}
} else
{var node_54729 = cljs.core.first.call(null,seq__54708_54723__$1);node_54729.innerHTML = value_54712;
{
var G__54730 = cljs.core.next.call(null,seq__54708_54723__$1);
var G__54731 = null;
var G__54732 = (0);
var G__54733 = (0);
seq__54708_54713 = G__54730;
chunk__54709_54714 = G__54731;
count__54710_54715 = G__54732;
i__54711_54716 = G__54733;
continue;
}
}
} else
{}
}
break;
}
}catch (e54707){if((e54707 instanceof Error))
{var e_54734 = e54707;domina.replace_children_BANG_.call(null,content,value_54712);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54707;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__54741_54745 = cljs.core.seq.call(null,children);var chunk__54742_54746 = null;var count__54743_54747 = (0);var i__54744_54748 = (0);while(true){
if((i__54744_54748 < count__54743_54747))
{var child_54749 = cljs.core._nth.call(null,chunk__54742_54746,i__54744_54748);frag.appendChild(child_54749);
{
var G__54750 = seq__54741_54745;
var G__54751 = chunk__54742_54746;
var G__54752 = count__54743_54747;
var G__54753 = (i__54744_54748 + (1));
seq__54741_54745 = G__54750;
chunk__54742_54746 = G__54751;
count__54743_54747 = G__54752;
i__54744_54748 = G__54753;
continue;
}
} else
{var temp__4126__auto___54754 = cljs.core.seq.call(null,seq__54741_54745);if(temp__4126__auto___54754)
{var seq__54741_54755__$1 = temp__4126__auto___54754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54741_54755__$1))
{var c__4299__auto___54756 = cljs.core.chunk_first.call(null,seq__54741_54755__$1);{
var G__54757 = cljs.core.chunk_rest.call(null,seq__54741_54755__$1);
var G__54758 = c__4299__auto___54756;
var G__54759 = cljs.core.count.call(null,c__4299__auto___54756);
var G__54760 = (0);
seq__54741_54745 = G__54757;
chunk__54742_54746 = G__54758;
count__54743_54747 = G__54759;
i__54744_54748 = G__54760;
continue;
}
} else
{var child_54761 = cljs.core.first.call(null,seq__54741_54755__$1);frag.appendChild(child_54761);
{
var G__54762 = cljs.core.next.call(null,seq__54741_54755__$1);
var G__54763 = null;
var G__54764 = (0);
var G__54765 = (0);
seq__54741_54745 = G__54762;
chunk__54742_54746 = G__54763;
count__54743_54747 = G__54764;
i__54744_54748 = G__54765;
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
return (function (p1__54735_SHARP_,p2__54736_SHARP_){return f.call(null,p1__54735_SHARP_,p2__54736_SHARP_);
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
{if((function (){var G__54767 = list_thing;if(G__54767)
{var bit__4193__auto__ = (G__54767.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54767.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54767.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54767);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54767);
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
{if((function (){var G__54768 = content;if(G__54768)
{var bit__4193__auto__ = (G__54768.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54768.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54768.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54768);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54768);
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
{if((function (){var G__54769 = content;if(G__54769)
{var bit__4193__auto__ = (G__54769.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54769.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54769.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54769);
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

//# sourceMappingURL=domina.js.map