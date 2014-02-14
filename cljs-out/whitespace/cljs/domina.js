// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_27375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27376 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27377 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27376,table_section_wrapper_27376,opt_wrapper_27375,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27377,table_section_wrapper_27376,cell_wrapper_27377,opt_wrapper_27375,table_section_wrapper_27376,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27376]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27382 = cljs.core.seq.call(null,tbody);var chunk__27383 = null;var count__27384 = 0;var i__27385 = 0;while(true){
if((i__27385 < count__27384))
{var child = cljs.core._nth.call(null,chunk__27383,i__27385);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27386 = seq__27382;
var G__27387 = chunk__27383;
var G__27388 = count__27384;
var G__27389 = (i__27385 + 1);
seq__27382 = G__27386;
chunk__27383 = G__27387;
count__27384 = G__27388;
i__27385 = G__27389;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__27382);if(temp__4092__auto__)
{var seq__27382__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27382__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__27382__$1);{
var G__27390 = cljs.core.chunk_rest.call(null,seq__27382__$1);
var G__27391 = c__4148__auto__;
var G__27392 = cljs.core.count.call(null,c__4148__auto__);
var G__27393 = 0;
seq__27382 = G__27390;
chunk__27383 = G__27391;
count__27384 = G__27392;
i__27385 = G__27393;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__27382__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27394 = cljs.core.next.call(null,seq__27382__$1);
var G__27395 = null;
var G__27396 = 0;
var G__27397 = 0;
seq__27382 = G__27394;
chunk__27383 = G__27395;
count__27384 = G__27396;
i__27385 = G__27397;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27399 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__27399,0,null);var start_wrap = cljs.core.nth.call(null,vec__27399,1,null);var end_wrap = cljs.core.nth.call(null,vec__27399,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27400 = wrapper.lastChild;
var G__27401 = (level - 1);
wrapper = G__27400;
level = G__27401;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj27403 = {};return obj27403;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__27404){
var mesg = cljs.core.seq(arglist__27404);
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
log.cljs$lang$applyTo = (function (arglist__27405){
var mesg = cljs.core.seq(arglist__27405);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27406){
var contents = cljs.core.seq(arglist__27406);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__27407_SHARP_){return p1__27407_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__27408_SHARP_,p2__27409_SHARP_){return goog.dom.insertChildAt(p1__27408_SHARP_,p2__27409_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__27411_SHARP_,p2__27410_SHARP_){return goog.dom.insertSiblingBefore(p2__27410_SHARP_,p1__27411_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__27413_SHARP_,p2__27412_SHARP_){return goog.dom.insertSiblingAfter(p2__27412_SHARP_,p1__27413_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__27415_SHARP_,p2__27414_SHARP_){return goog.dom.replaceNode(p2__27414_SHARP_,p1__27415_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27420_27424 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27421_27425 = null;var count__27422_27426 = 0;var i__27423_27427 = 0;while(true){
if((i__27423_27427 < count__27422_27426))
{var n_27428 = cljs.core._nth.call(null,chunk__27421_27425,i__27423_27427);goog.style.setStyle(n_27428,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__27429 = seq__27420_27424;
var G__27430 = chunk__27421_27425;
var G__27431 = count__27422_27426;
var G__27432 = (i__27423_27427 + 1);
seq__27420_27424 = G__27429;
chunk__27421_27425 = G__27430;
count__27422_27426 = G__27431;
i__27423_27427 = G__27432;
continue;
}
} else
{var temp__4092__auto___27433 = cljs.core.seq.call(null,seq__27420_27424);if(temp__4092__auto___27433)
{var seq__27420_27434__$1 = temp__4092__auto___27433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27420_27434__$1))
{var c__4148__auto___27435 = cljs.core.chunk_first.call(null,seq__27420_27434__$1);{
var G__27436 = cljs.core.chunk_rest.call(null,seq__27420_27434__$1);
var G__27437 = c__4148__auto___27435;
var G__27438 = cljs.core.count.call(null,c__4148__auto___27435);
var G__27439 = 0;
seq__27420_27424 = G__27436;
chunk__27421_27425 = G__27437;
count__27422_27426 = G__27438;
i__27423_27427 = G__27439;
continue;
}
} else
{var n_27440 = cljs.core.first.call(null,seq__27420_27434__$1);goog.style.setStyle(n_27440,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__27441 = cljs.core.next.call(null,seq__27420_27434__$1);
var G__27442 = null;
var G__27443 = 0;
var G__27444 = 0;
seq__27420_27424 = G__27441;
chunk__27421_27425 = G__27442;
count__27422_27426 = G__27443;
i__27423_27427 = G__27444;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27445){
var content = cljs.core.first(arglist__27445);
arglist__27445 = cljs.core.next(arglist__27445);
var name = cljs.core.first(arglist__27445);
var value = cljs.core.rest(arglist__27445);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27450_27454 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27451_27455 = null;var count__27452_27456 = 0;var i__27453_27457 = 0;while(true){
if((i__27453_27457 < count__27452_27456))
{var n_27458 = cljs.core._nth.call(null,chunk__27451_27455,i__27453_27457);n_27458.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__27459 = seq__27450_27454;
var G__27460 = chunk__27451_27455;
var G__27461 = count__27452_27456;
var G__27462 = (i__27453_27457 + 1);
seq__27450_27454 = G__27459;
chunk__27451_27455 = G__27460;
count__27452_27456 = G__27461;
i__27453_27457 = G__27462;
continue;
}
} else
{var temp__4092__auto___27463 = cljs.core.seq.call(null,seq__27450_27454);if(temp__4092__auto___27463)
{var seq__27450_27464__$1 = temp__4092__auto___27463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27450_27464__$1))
{var c__4148__auto___27465 = cljs.core.chunk_first.call(null,seq__27450_27464__$1);{
var G__27466 = cljs.core.chunk_rest.call(null,seq__27450_27464__$1);
var G__27467 = c__4148__auto___27465;
var G__27468 = cljs.core.count.call(null,c__4148__auto___27465);
var G__27469 = 0;
seq__27450_27454 = G__27466;
chunk__27451_27455 = G__27467;
count__27452_27456 = G__27468;
i__27453_27457 = G__27469;
continue;
}
} else
{var n_27470 = cljs.core.first.call(null,seq__27450_27464__$1);n_27470.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__27471 = cljs.core.next.call(null,seq__27450_27464__$1);
var G__27472 = null;
var G__27473 = 0;
var G__27474 = 0;
seq__27450_27454 = G__27471;
chunk__27451_27455 = G__27472;
count__27452_27456 = G__27473;
i__27453_27457 = G__27474;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27475){
var content = cljs.core.first(arglist__27475);
arglist__27475 = cljs.core.next(arglist__27475);
var name = cljs.core.first(arglist__27475);
var value = cljs.core.rest(arglist__27475);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27480_27484 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27481_27485 = null;var count__27482_27486 = 0;var i__27483_27487 = 0;while(true){
if((i__27483_27487 < count__27482_27486))
{var n_27488 = cljs.core._nth.call(null,chunk__27481_27485,i__27483_27487);n_27488.removeAttribute(cljs.core.name.call(null,name));
{
var G__27489 = seq__27480_27484;
var G__27490 = chunk__27481_27485;
var G__27491 = count__27482_27486;
var G__27492 = (i__27483_27487 + 1);
seq__27480_27484 = G__27489;
chunk__27481_27485 = G__27490;
count__27482_27486 = G__27491;
i__27483_27487 = G__27492;
continue;
}
} else
{var temp__4092__auto___27493 = cljs.core.seq.call(null,seq__27480_27484);if(temp__4092__auto___27493)
{var seq__27480_27494__$1 = temp__4092__auto___27493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27480_27494__$1))
{var c__4148__auto___27495 = cljs.core.chunk_first.call(null,seq__27480_27494__$1);{
var G__27496 = cljs.core.chunk_rest.call(null,seq__27480_27494__$1);
var G__27497 = c__4148__auto___27495;
var G__27498 = cljs.core.count.call(null,c__4148__auto___27495);
var G__27499 = 0;
seq__27480_27484 = G__27496;
chunk__27481_27485 = G__27497;
count__27482_27486 = G__27498;
i__27483_27487 = G__27499;
continue;
}
} else
{var n_27500 = cljs.core.first.call(null,seq__27480_27494__$1);n_27500.removeAttribute(cljs.core.name.call(null,name));
{
var G__27501 = cljs.core.next.call(null,seq__27480_27494__$1);
var G__27502 = null;
var G__27503 = 0;
var G__27504 = 0;
seq__27480_27484 = G__27501;
chunk__27481_27485 = G__27502;
count__27482_27486 = G__27503;
i__27483_27487 = G__27504;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__27506 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__27506,0,null);var v = cljs.core.nth.call(null,vec__27506,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__27507_SHARP_){var attr = attrs__$1.item(p1__27507_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27514_27520 = cljs.core.seq.call(null,styles);var chunk__27515_27521 = null;var count__27516_27522 = 0;var i__27517_27523 = 0;while(true){
if((i__27517_27523 < count__27516_27522))
{var vec__27518_27524 = cljs.core._nth.call(null,chunk__27515_27521,i__27517_27523);var name_27525 = cljs.core.nth.call(null,vec__27518_27524,0,null);var value_27526 = cljs.core.nth.call(null,vec__27518_27524,1,null);domina.set_style_BANG_.call(null,content,name_27525,value_27526);
{
var G__27527 = seq__27514_27520;
var G__27528 = chunk__27515_27521;
var G__27529 = count__27516_27522;
var G__27530 = (i__27517_27523 + 1);
seq__27514_27520 = G__27527;
chunk__27515_27521 = G__27528;
count__27516_27522 = G__27529;
i__27517_27523 = G__27530;
continue;
}
} else
{var temp__4092__auto___27531 = cljs.core.seq.call(null,seq__27514_27520);if(temp__4092__auto___27531)
{var seq__27514_27532__$1 = temp__4092__auto___27531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27514_27532__$1))
{var c__4148__auto___27533 = cljs.core.chunk_first.call(null,seq__27514_27532__$1);{
var G__27534 = cljs.core.chunk_rest.call(null,seq__27514_27532__$1);
var G__27535 = c__4148__auto___27533;
var G__27536 = cljs.core.count.call(null,c__4148__auto___27533);
var G__27537 = 0;
seq__27514_27520 = G__27534;
chunk__27515_27521 = G__27535;
count__27516_27522 = G__27536;
i__27517_27523 = G__27537;
continue;
}
} else
{var vec__27519_27538 = cljs.core.first.call(null,seq__27514_27532__$1);var name_27539 = cljs.core.nth.call(null,vec__27519_27538,0,null);var value_27540 = cljs.core.nth.call(null,vec__27519_27538,1,null);domina.set_style_BANG_.call(null,content,name_27539,value_27540);
{
var G__27541 = cljs.core.next.call(null,seq__27514_27532__$1);
var G__27542 = null;
var G__27543 = 0;
var G__27544 = 0;
seq__27514_27520 = G__27541;
chunk__27515_27521 = G__27542;
count__27516_27522 = G__27543;
i__27517_27523 = G__27544;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27551_27557 = cljs.core.seq.call(null,attrs);var chunk__27552_27558 = null;var count__27553_27559 = 0;var i__27554_27560 = 0;while(true){
if((i__27554_27560 < count__27553_27559))
{var vec__27555_27561 = cljs.core._nth.call(null,chunk__27552_27558,i__27554_27560);var name_27562 = cljs.core.nth.call(null,vec__27555_27561,0,null);var value_27563 = cljs.core.nth.call(null,vec__27555_27561,1,null);domina.set_attr_BANG_.call(null,content,name_27562,value_27563);
{
var G__27564 = seq__27551_27557;
var G__27565 = chunk__27552_27558;
var G__27566 = count__27553_27559;
var G__27567 = (i__27554_27560 + 1);
seq__27551_27557 = G__27564;
chunk__27552_27558 = G__27565;
count__27553_27559 = G__27566;
i__27554_27560 = G__27567;
continue;
}
} else
{var temp__4092__auto___27568 = cljs.core.seq.call(null,seq__27551_27557);if(temp__4092__auto___27568)
{var seq__27551_27569__$1 = temp__4092__auto___27568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27551_27569__$1))
{var c__4148__auto___27570 = cljs.core.chunk_first.call(null,seq__27551_27569__$1);{
var G__27571 = cljs.core.chunk_rest.call(null,seq__27551_27569__$1);
var G__27572 = c__4148__auto___27570;
var G__27573 = cljs.core.count.call(null,c__4148__auto___27570);
var G__27574 = 0;
seq__27551_27557 = G__27571;
chunk__27552_27558 = G__27572;
count__27553_27559 = G__27573;
i__27554_27560 = G__27574;
continue;
}
} else
{var vec__27556_27575 = cljs.core.first.call(null,seq__27551_27569__$1);var name_27576 = cljs.core.nth.call(null,vec__27556_27575,0,null);var value_27577 = cljs.core.nth.call(null,vec__27556_27575,1,null);domina.set_attr_BANG_.call(null,content,name_27576,value_27577);
{
var G__27578 = cljs.core.next.call(null,seq__27551_27569__$1);
var G__27579 = null;
var G__27580 = 0;
var G__27581 = 0;
seq__27551_27557 = G__27578;
chunk__27552_27558 = G__27579;
count__27553_27559 = G__27580;
i__27554_27560 = G__27581;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27586_27590 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27587_27591 = null;var count__27588_27592 = 0;var i__27589_27593 = 0;while(true){
if((i__27589_27593 < count__27588_27592))
{var node_27594 = cljs.core._nth.call(null,chunk__27587_27591,i__27589_27593);goog.dom.classes.add(node_27594,class$);
{
var G__27595 = seq__27586_27590;
var G__27596 = chunk__27587_27591;
var G__27597 = count__27588_27592;
var G__27598 = (i__27589_27593 + 1);
seq__27586_27590 = G__27595;
chunk__27587_27591 = G__27596;
count__27588_27592 = G__27597;
i__27589_27593 = G__27598;
continue;
}
} else
{var temp__4092__auto___27599 = cljs.core.seq.call(null,seq__27586_27590);if(temp__4092__auto___27599)
{var seq__27586_27600__$1 = temp__4092__auto___27599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27586_27600__$1))
{var c__4148__auto___27601 = cljs.core.chunk_first.call(null,seq__27586_27600__$1);{
var G__27602 = cljs.core.chunk_rest.call(null,seq__27586_27600__$1);
var G__27603 = c__4148__auto___27601;
var G__27604 = cljs.core.count.call(null,c__4148__auto___27601);
var G__27605 = 0;
seq__27586_27590 = G__27602;
chunk__27587_27591 = G__27603;
count__27588_27592 = G__27604;
i__27589_27593 = G__27605;
continue;
}
} else
{var node_27606 = cljs.core.first.call(null,seq__27586_27600__$1);goog.dom.classes.add(node_27606,class$);
{
var G__27607 = cljs.core.next.call(null,seq__27586_27600__$1);
var G__27608 = null;
var G__27609 = 0;
var G__27610 = 0;
seq__27586_27590 = G__27607;
chunk__27587_27591 = G__27608;
count__27588_27592 = G__27609;
i__27589_27593 = G__27610;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27615_27619 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27616_27620 = null;var count__27617_27621 = 0;var i__27618_27622 = 0;while(true){
if((i__27618_27622 < count__27617_27621))
{var node_27623 = cljs.core._nth.call(null,chunk__27616_27620,i__27618_27622);goog.dom.classes.remove(node_27623,class$);
{
var G__27624 = seq__27615_27619;
var G__27625 = chunk__27616_27620;
var G__27626 = count__27617_27621;
var G__27627 = (i__27618_27622 + 1);
seq__27615_27619 = G__27624;
chunk__27616_27620 = G__27625;
count__27617_27621 = G__27626;
i__27618_27622 = G__27627;
continue;
}
} else
{var temp__4092__auto___27628 = cljs.core.seq.call(null,seq__27615_27619);if(temp__4092__auto___27628)
{var seq__27615_27629__$1 = temp__4092__auto___27628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27615_27629__$1))
{var c__4148__auto___27630 = cljs.core.chunk_first.call(null,seq__27615_27629__$1);{
var G__27631 = cljs.core.chunk_rest.call(null,seq__27615_27629__$1);
var G__27632 = c__4148__auto___27630;
var G__27633 = cljs.core.count.call(null,c__4148__auto___27630);
var G__27634 = 0;
seq__27615_27619 = G__27631;
chunk__27616_27620 = G__27632;
count__27617_27621 = G__27633;
i__27618_27622 = G__27634;
continue;
}
} else
{var node_27635 = cljs.core.first.call(null,seq__27615_27629__$1);goog.dom.classes.remove(node_27635,class$);
{
var G__27636 = cljs.core.next.call(null,seq__27615_27629__$1);
var G__27637 = null;
var G__27638 = 0;
var G__27639 = 0;
seq__27615_27619 = G__27636;
chunk__27616_27620 = G__27637;
count__27617_27621 = G__27638;
i__27618_27622 = G__27639;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27644_27648 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27645_27649 = null;var count__27646_27650 = 0;var i__27647_27651 = 0;while(true){
if((i__27647_27651 < count__27646_27650))
{var node_27652 = cljs.core._nth.call(null,chunk__27645_27649,i__27647_27651);goog.dom.classes.toggle(node_27652,class$);
{
var G__27653 = seq__27644_27648;
var G__27654 = chunk__27645_27649;
var G__27655 = count__27646_27650;
var G__27656 = (i__27647_27651 + 1);
seq__27644_27648 = G__27653;
chunk__27645_27649 = G__27654;
count__27646_27650 = G__27655;
i__27647_27651 = G__27656;
continue;
}
} else
{var temp__4092__auto___27657 = cljs.core.seq.call(null,seq__27644_27648);if(temp__4092__auto___27657)
{var seq__27644_27658__$1 = temp__4092__auto___27657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27644_27658__$1))
{var c__4148__auto___27659 = cljs.core.chunk_first.call(null,seq__27644_27658__$1);{
var G__27660 = cljs.core.chunk_rest.call(null,seq__27644_27658__$1);
var G__27661 = c__4148__auto___27659;
var G__27662 = cljs.core.count.call(null,c__4148__auto___27659);
var G__27663 = 0;
seq__27644_27648 = G__27660;
chunk__27645_27649 = G__27661;
count__27646_27650 = G__27662;
i__27647_27651 = G__27663;
continue;
}
} else
{var node_27664 = cljs.core.first.call(null,seq__27644_27658__$1);goog.dom.classes.toggle(node_27664,class$);
{
var G__27665 = cljs.core.next.call(null,seq__27644_27658__$1);
var G__27666 = null;
var G__27667 = 0;
var G__27668 = 0;
seq__27644_27648 = G__27665;
chunk__27645_27649 = G__27666;
count__27646_27650 = G__27667;
i__27647_27651 = G__27668;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27677__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__27673_27678 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27674_27679 = null;var count__27675_27680 = 0;var i__27676_27681 = 0;while(true){
if((i__27676_27681 < count__27675_27680))
{var node_27682 = cljs.core._nth.call(null,chunk__27674_27679,i__27676_27681);goog.dom.classes.set(node_27682,classes_27677__$1);
{
var G__27683 = seq__27673_27678;
var G__27684 = chunk__27674_27679;
var G__27685 = count__27675_27680;
var G__27686 = (i__27676_27681 + 1);
seq__27673_27678 = G__27683;
chunk__27674_27679 = G__27684;
count__27675_27680 = G__27685;
i__27676_27681 = G__27686;
continue;
}
} else
{var temp__4092__auto___27687 = cljs.core.seq.call(null,seq__27673_27678);if(temp__4092__auto___27687)
{var seq__27673_27688__$1 = temp__4092__auto___27687;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27673_27688__$1))
{var c__4148__auto___27689 = cljs.core.chunk_first.call(null,seq__27673_27688__$1);{
var G__27690 = cljs.core.chunk_rest.call(null,seq__27673_27688__$1);
var G__27691 = c__4148__auto___27689;
var G__27692 = cljs.core.count.call(null,c__4148__auto___27689);
var G__27693 = 0;
seq__27673_27678 = G__27690;
chunk__27674_27679 = G__27691;
count__27675_27680 = G__27692;
i__27676_27681 = G__27693;
continue;
}
} else
{var node_27694 = cljs.core.first.call(null,seq__27673_27688__$1);goog.dom.classes.set(node_27694,classes_27677__$1);
{
var G__27695 = cljs.core.next.call(null,seq__27673_27688__$1);
var G__27696 = null;
var G__27697 = 0;
var G__27698 = 0;
seq__27673_27678 = G__27695;
chunk__27674_27679 = G__27696;
count__27675_27680 = G__27697;
i__27676_27681 = G__27698;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27703_27707 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27704_27708 = null;var count__27705_27709 = 0;var i__27706_27710 = 0;while(true){
if((i__27706_27710 < count__27705_27709))
{var node_27711 = cljs.core._nth.call(null,chunk__27704_27708,i__27706_27710);goog.dom.setTextContent(node_27711,value);
{
var G__27712 = seq__27703_27707;
var G__27713 = chunk__27704_27708;
var G__27714 = count__27705_27709;
var G__27715 = (i__27706_27710 + 1);
seq__27703_27707 = G__27712;
chunk__27704_27708 = G__27713;
count__27705_27709 = G__27714;
i__27706_27710 = G__27715;
continue;
}
} else
{var temp__4092__auto___27716 = cljs.core.seq.call(null,seq__27703_27707);if(temp__4092__auto___27716)
{var seq__27703_27717__$1 = temp__4092__auto___27716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27703_27717__$1))
{var c__4148__auto___27718 = cljs.core.chunk_first.call(null,seq__27703_27717__$1);{
var G__27719 = cljs.core.chunk_rest.call(null,seq__27703_27717__$1);
var G__27720 = c__4148__auto___27718;
var G__27721 = cljs.core.count.call(null,c__4148__auto___27718);
var G__27722 = 0;
seq__27703_27707 = G__27719;
chunk__27704_27708 = G__27720;
count__27705_27709 = G__27721;
i__27706_27710 = G__27722;
continue;
}
} else
{var node_27723 = cljs.core.first.call(null,seq__27703_27717__$1);goog.dom.setTextContent(node_27723,value);
{
var G__27724 = cljs.core.next.call(null,seq__27703_27717__$1);
var G__27725 = null;
var G__27726 = 0;
var G__27727 = 0;
seq__27703_27707 = G__27724;
chunk__27704_27708 = G__27725;
count__27705_27709 = G__27726;
i__27706_27710 = G__27727;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27732_27736 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27733_27737 = null;var count__27734_27738 = 0;var i__27735_27739 = 0;while(true){
if((i__27735_27739 < count__27734_27738))
{var node_27740 = cljs.core._nth.call(null,chunk__27733_27737,i__27735_27739);goog.dom.forms.setValue(node_27740,value);
{
var G__27741 = seq__27732_27736;
var G__27742 = chunk__27733_27737;
var G__27743 = count__27734_27738;
var G__27744 = (i__27735_27739 + 1);
seq__27732_27736 = G__27741;
chunk__27733_27737 = G__27742;
count__27734_27738 = G__27743;
i__27735_27739 = G__27744;
continue;
}
} else
{var temp__4092__auto___27745 = cljs.core.seq.call(null,seq__27732_27736);if(temp__4092__auto___27745)
{var seq__27732_27746__$1 = temp__4092__auto___27745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27732_27746__$1))
{var c__4148__auto___27747 = cljs.core.chunk_first.call(null,seq__27732_27746__$1);{
var G__27748 = cljs.core.chunk_rest.call(null,seq__27732_27746__$1);
var G__27749 = c__4148__auto___27747;
var G__27750 = cljs.core.count.call(null,c__4148__auto___27747);
var G__27751 = 0;
seq__27732_27736 = G__27748;
chunk__27733_27737 = G__27749;
count__27734_27738 = G__27750;
i__27735_27739 = G__27751;
continue;
}
} else
{var node_27752 = cljs.core.first.call(null,seq__27732_27746__$1);goog.dom.forms.setValue(node_27752,value);
{
var G__27753 = cljs.core.next.call(null,seq__27732_27746__$1);
var G__27754 = null;
var G__27755 = 0;
var G__27756 = 0;
seq__27732_27736 = G__27753;
chunk__27733_27737 = G__27754;
count__27734_27738 = G__27755;
i__27735_27739 = G__27756;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_27767 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27763_27768 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27764_27769 = null;var count__27765_27770 = 0;var i__27766_27771 = 0;while(true){
if((i__27766_27771 < count__27765_27770))
{var node_27772 = cljs.core._nth.call(null,chunk__27764_27769,i__27766_27771);node_27772.innerHTML = value_27767;
{
var G__27773 = seq__27763_27768;
var G__27774 = chunk__27764_27769;
var G__27775 = count__27765_27770;
var G__27776 = (i__27766_27771 + 1);
seq__27763_27768 = G__27773;
chunk__27764_27769 = G__27774;
count__27765_27770 = G__27775;
i__27766_27771 = G__27776;
continue;
}
} else
{var temp__4092__auto___27777 = cljs.core.seq.call(null,seq__27763_27768);if(temp__4092__auto___27777)
{var seq__27763_27778__$1 = temp__4092__auto___27777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27763_27778__$1))
{var c__4148__auto___27779 = cljs.core.chunk_first.call(null,seq__27763_27778__$1);{
var G__27780 = cljs.core.chunk_rest.call(null,seq__27763_27778__$1);
var G__27781 = c__4148__auto___27779;
var G__27782 = cljs.core.count.call(null,c__4148__auto___27779);
var G__27783 = 0;
seq__27763_27768 = G__27780;
chunk__27764_27769 = G__27781;
count__27765_27770 = G__27782;
i__27766_27771 = G__27783;
continue;
}
} else
{var node_27784 = cljs.core.first.call(null,seq__27763_27778__$1);node_27784.innerHTML = value_27767;
{
var G__27785 = cljs.core.next.call(null,seq__27763_27778__$1);
var G__27786 = null;
var G__27787 = 0;
var G__27788 = 0;
seq__27763_27768 = G__27785;
chunk__27764_27769 = G__27786;
count__27765_27770 = G__27787;
i__27766_27771 = G__27788;
continue;
}
}
} else
{}
}
break;
}
}catch (e27762){if((e27762 instanceof Error))
{var e_27789 = e27762;domina.replace_children_BANG_.call(null,content,value_27767);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27762;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27796_27800 = cljs.core.seq.call(null,children);var chunk__27797_27801 = null;var count__27798_27802 = 0;var i__27799_27803 = 0;while(true){
if((i__27799_27803 < count__27798_27802))
{var child_27804 = cljs.core._nth.call(null,chunk__27797_27801,i__27799_27803);frag.appendChild(child_27804);
{
var G__27805 = seq__27796_27800;
var G__27806 = chunk__27797_27801;
var G__27807 = count__27798_27802;
var G__27808 = (i__27799_27803 + 1);
seq__27796_27800 = G__27805;
chunk__27797_27801 = G__27806;
count__27798_27802 = G__27807;
i__27799_27803 = G__27808;
continue;
}
} else
{var temp__4092__auto___27809 = cljs.core.seq.call(null,seq__27796_27800);if(temp__4092__auto___27809)
{var seq__27796_27810__$1 = temp__4092__auto___27809;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27796_27810__$1))
{var c__4148__auto___27811 = cljs.core.chunk_first.call(null,seq__27796_27810__$1);{
var G__27812 = cljs.core.chunk_rest.call(null,seq__27796_27810__$1);
var G__27813 = c__4148__auto___27811;
var G__27814 = cljs.core.count.call(null,c__4148__auto___27811);
var G__27815 = 0;
seq__27796_27800 = G__27812;
chunk__27797_27801 = G__27813;
count__27798_27802 = G__27814;
i__27799_27803 = G__27815;
continue;
}
} else
{var child_27816 = cljs.core.first.call(null,seq__27796_27810__$1);frag.appendChild(child_27816);
{
var G__27817 = cljs.core.next.call(null,seq__27796_27810__$1);
var G__27818 = null;
var G__27819 = 0;
var G__27820 = 0;
seq__27796_27800 = G__27817;
chunk__27797_27801 = G__27818;
count__27798_27802 = G__27819;
i__27799_27803 = G__27820;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__27790_SHARP_,p2__27791_SHARP_){return f.call(null,p1__27790_SHARP_,p2__27791_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__27822 = list_thing;if(G__27822)
{var bit__4050__auto__ = (G__27822.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27822.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27822.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27822);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27822);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__27823 = content;if(G__27823)
{var bit__4050__auto__ = (G__27823.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27823.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27823.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27823);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27823);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__27824 = content;if(G__27824)
{var bit__4050__auto__ = (G__27824.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27824.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27824.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27824);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__27824);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
