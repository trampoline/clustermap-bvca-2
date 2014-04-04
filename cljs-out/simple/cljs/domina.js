// Compiled by ClojureScript 0.0-2173
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
var opt_wrapper_17461 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17462 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17463 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17462,table_section_wrapper_17462,opt_wrapper_17461,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17463,table_section_wrapper_17462,cell_wrapper_17463,opt_wrapper_17461,table_section_wrapper_17462,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17462]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17468 = cljs.core.seq.call(null,tbody);var chunk__17469 = null;var count__17470 = 0;var i__17471 = 0;while(true){
if((i__17471 < count__17470))
{var child = cljs.core._nth.call(null,chunk__17469,i__17471);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17472 = seq__17468;
var G__17473 = chunk__17469;
var G__17474 = count__17470;
var G__17475 = (i__17471 + 1);
seq__17468 = G__17472;
chunk__17469 = G__17473;
count__17470 = G__17474;
i__17471 = G__17475;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17468);if(temp__4092__auto__)
{var seq__17468__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17468__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17468__$1);{
var G__17476 = cljs.core.chunk_rest.call(null,seq__17468__$1);
var G__17477 = c__4189__auto__;
var G__17478 = cljs.core.count.call(null,c__4189__auto__);
var G__17479 = 0;
seq__17468 = G__17476;
chunk__17469 = G__17477;
count__17470 = G__17478;
i__17471 = G__17479;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17468__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17480 = cljs.core.next.call(null,seq__17468__$1);
var G__17481 = null;
var G__17482 = 0;
var G__17483 = 0;
seq__17468 = G__17480;
chunk__17469 = G__17481;
count__17470 = G__17482;
i__17471 = G__17483;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17485 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17485,0,null);var start_wrap = cljs.core.nth.call(null,vec__17485,1,null);var end_wrap = cljs.core.nth.call(null,vec__17485,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17486 = wrapper.lastChild;
var G__17487 = (level - 1);
wrapper = G__17486;
level = G__17487;
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
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
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
domina.DomContent = (function (){var obj17489 = {};return obj17489;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__17490){
var mesg = cljs.core.seq(arglist__17490);
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
log.cljs$lang$applyTo = (function (arglist__17491){
var mesg = cljs.core.seq(arglist__17491);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17492){
var contents = cljs.core.seq(arglist__17492);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17493_SHARP_){return p1__17493_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17494_SHARP_,p2__17495_SHARP_){return goog.dom.insertChildAt(p1__17494_SHARP_,p2__17495_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17497_SHARP_,p2__17496_SHARP_){return goog.dom.insertSiblingBefore(p2__17496_SHARP_,p1__17497_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17499_SHARP_,p2__17498_SHARP_){return goog.dom.insertSiblingAfter(p2__17498_SHARP_,p1__17499_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17501_SHARP_,p2__17500_SHARP_){return goog.dom.replaceNode(p2__17500_SHARP_,p1__17501_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17506_17510 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17507_17511 = null;var count__17508_17512 = 0;var i__17509_17513 = 0;while(true){
if((i__17509_17513 < count__17508_17512))
{var n_17514 = cljs.core._nth.call(null,chunk__17507_17511,i__17509_17513);goog.style.setStyle(n_17514,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17515 = seq__17506_17510;
var G__17516 = chunk__17507_17511;
var G__17517 = count__17508_17512;
var G__17518 = (i__17509_17513 + 1);
seq__17506_17510 = G__17515;
chunk__17507_17511 = G__17516;
count__17508_17512 = G__17517;
i__17509_17513 = G__17518;
continue;
}
} else
{var temp__4092__auto___17519 = cljs.core.seq.call(null,seq__17506_17510);if(temp__4092__auto___17519)
{var seq__17506_17520__$1 = temp__4092__auto___17519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17506_17520__$1))
{var c__4189__auto___17521 = cljs.core.chunk_first.call(null,seq__17506_17520__$1);{
var G__17522 = cljs.core.chunk_rest.call(null,seq__17506_17520__$1);
var G__17523 = c__4189__auto___17521;
var G__17524 = cljs.core.count.call(null,c__4189__auto___17521);
var G__17525 = 0;
seq__17506_17510 = G__17522;
chunk__17507_17511 = G__17523;
count__17508_17512 = G__17524;
i__17509_17513 = G__17525;
continue;
}
} else
{var n_17526 = cljs.core.first.call(null,seq__17506_17520__$1);goog.style.setStyle(n_17526,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17527 = cljs.core.next.call(null,seq__17506_17520__$1);
var G__17528 = null;
var G__17529 = 0;
var G__17530 = 0;
seq__17506_17510 = G__17527;
chunk__17507_17511 = G__17528;
count__17508_17512 = G__17529;
i__17509_17513 = G__17530;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17531){
var content = cljs.core.first(arglist__17531);
arglist__17531 = cljs.core.next(arglist__17531);
var name = cljs.core.first(arglist__17531);
var value = cljs.core.rest(arglist__17531);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17536_17540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17537_17541 = null;var count__17538_17542 = 0;var i__17539_17543 = 0;while(true){
if((i__17539_17543 < count__17538_17542))
{var n_17544 = cljs.core._nth.call(null,chunk__17537_17541,i__17539_17543);n_17544.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17545 = seq__17536_17540;
var G__17546 = chunk__17537_17541;
var G__17547 = count__17538_17542;
var G__17548 = (i__17539_17543 + 1);
seq__17536_17540 = G__17545;
chunk__17537_17541 = G__17546;
count__17538_17542 = G__17547;
i__17539_17543 = G__17548;
continue;
}
} else
{var temp__4092__auto___17549 = cljs.core.seq.call(null,seq__17536_17540);if(temp__4092__auto___17549)
{var seq__17536_17550__$1 = temp__4092__auto___17549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17536_17550__$1))
{var c__4189__auto___17551 = cljs.core.chunk_first.call(null,seq__17536_17550__$1);{
var G__17552 = cljs.core.chunk_rest.call(null,seq__17536_17550__$1);
var G__17553 = c__4189__auto___17551;
var G__17554 = cljs.core.count.call(null,c__4189__auto___17551);
var G__17555 = 0;
seq__17536_17540 = G__17552;
chunk__17537_17541 = G__17553;
count__17538_17542 = G__17554;
i__17539_17543 = G__17555;
continue;
}
} else
{var n_17556 = cljs.core.first.call(null,seq__17536_17550__$1);n_17556.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17557 = cljs.core.next.call(null,seq__17536_17550__$1);
var G__17558 = null;
var G__17559 = 0;
var G__17560 = 0;
seq__17536_17540 = G__17557;
chunk__17537_17541 = G__17558;
count__17538_17542 = G__17559;
i__17539_17543 = G__17560;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17561){
var content = cljs.core.first(arglist__17561);
arglist__17561 = cljs.core.next(arglist__17561);
var name = cljs.core.first(arglist__17561);
var value = cljs.core.rest(arglist__17561);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17566_17570 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17567_17571 = null;var count__17568_17572 = 0;var i__17569_17573 = 0;while(true){
if((i__17569_17573 < count__17568_17572))
{var n_17574 = cljs.core._nth.call(null,chunk__17567_17571,i__17569_17573);n_17574.removeAttribute(cljs.core.name.call(null,name));
{
var G__17575 = seq__17566_17570;
var G__17576 = chunk__17567_17571;
var G__17577 = count__17568_17572;
var G__17578 = (i__17569_17573 + 1);
seq__17566_17570 = G__17575;
chunk__17567_17571 = G__17576;
count__17568_17572 = G__17577;
i__17569_17573 = G__17578;
continue;
}
} else
{var temp__4092__auto___17579 = cljs.core.seq.call(null,seq__17566_17570);if(temp__4092__auto___17579)
{var seq__17566_17580__$1 = temp__4092__auto___17579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17566_17580__$1))
{var c__4189__auto___17581 = cljs.core.chunk_first.call(null,seq__17566_17580__$1);{
var G__17582 = cljs.core.chunk_rest.call(null,seq__17566_17580__$1);
var G__17583 = c__4189__auto___17581;
var G__17584 = cljs.core.count.call(null,c__4189__auto___17581);
var G__17585 = 0;
seq__17566_17570 = G__17582;
chunk__17567_17571 = G__17583;
count__17568_17572 = G__17584;
i__17569_17573 = G__17585;
continue;
}
} else
{var n_17586 = cljs.core.first.call(null,seq__17566_17580__$1);n_17586.removeAttribute(cljs.core.name.call(null,name));
{
var G__17587 = cljs.core.next.call(null,seq__17566_17580__$1);
var G__17588 = null;
var G__17589 = 0;
var G__17590 = 0;
seq__17566_17570 = G__17587;
chunk__17567_17571 = G__17588;
count__17568_17572 = G__17589;
i__17569_17573 = G__17590;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17592 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17592,0,null);var v = cljs.core.nth.call(null,vec__17592,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17593_SHARP_){var attr = attrs__$1.item(p1__17593_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17600_17606 = cljs.core.seq.call(null,styles);var chunk__17601_17607 = null;var count__17602_17608 = 0;var i__17603_17609 = 0;while(true){
if((i__17603_17609 < count__17602_17608))
{var vec__17604_17610 = cljs.core._nth.call(null,chunk__17601_17607,i__17603_17609);var name_17611 = cljs.core.nth.call(null,vec__17604_17610,0,null);var value_17612 = cljs.core.nth.call(null,vec__17604_17610,1,null);domina.set_style_BANG_.call(null,content,name_17611,value_17612);
{
var G__17613 = seq__17600_17606;
var G__17614 = chunk__17601_17607;
var G__17615 = count__17602_17608;
var G__17616 = (i__17603_17609 + 1);
seq__17600_17606 = G__17613;
chunk__17601_17607 = G__17614;
count__17602_17608 = G__17615;
i__17603_17609 = G__17616;
continue;
}
} else
{var temp__4092__auto___17617 = cljs.core.seq.call(null,seq__17600_17606);if(temp__4092__auto___17617)
{var seq__17600_17618__$1 = temp__4092__auto___17617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17600_17618__$1))
{var c__4189__auto___17619 = cljs.core.chunk_first.call(null,seq__17600_17618__$1);{
var G__17620 = cljs.core.chunk_rest.call(null,seq__17600_17618__$1);
var G__17621 = c__4189__auto___17619;
var G__17622 = cljs.core.count.call(null,c__4189__auto___17619);
var G__17623 = 0;
seq__17600_17606 = G__17620;
chunk__17601_17607 = G__17621;
count__17602_17608 = G__17622;
i__17603_17609 = G__17623;
continue;
}
} else
{var vec__17605_17624 = cljs.core.first.call(null,seq__17600_17618__$1);var name_17625 = cljs.core.nth.call(null,vec__17605_17624,0,null);var value_17626 = cljs.core.nth.call(null,vec__17605_17624,1,null);domina.set_style_BANG_.call(null,content,name_17625,value_17626);
{
var G__17627 = cljs.core.next.call(null,seq__17600_17618__$1);
var G__17628 = null;
var G__17629 = 0;
var G__17630 = 0;
seq__17600_17606 = G__17627;
chunk__17601_17607 = G__17628;
count__17602_17608 = G__17629;
i__17603_17609 = G__17630;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17637_17643 = cljs.core.seq.call(null,attrs);var chunk__17638_17644 = null;var count__17639_17645 = 0;var i__17640_17646 = 0;while(true){
if((i__17640_17646 < count__17639_17645))
{var vec__17641_17647 = cljs.core._nth.call(null,chunk__17638_17644,i__17640_17646);var name_17648 = cljs.core.nth.call(null,vec__17641_17647,0,null);var value_17649 = cljs.core.nth.call(null,vec__17641_17647,1,null);domina.set_attr_BANG_.call(null,content,name_17648,value_17649);
{
var G__17650 = seq__17637_17643;
var G__17651 = chunk__17638_17644;
var G__17652 = count__17639_17645;
var G__17653 = (i__17640_17646 + 1);
seq__17637_17643 = G__17650;
chunk__17638_17644 = G__17651;
count__17639_17645 = G__17652;
i__17640_17646 = G__17653;
continue;
}
} else
{var temp__4092__auto___17654 = cljs.core.seq.call(null,seq__17637_17643);if(temp__4092__auto___17654)
{var seq__17637_17655__$1 = temp__4092__auto___17654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17637_17655__$1))
{var c__4189__auto___17656 = cljs.core.chunk_first.call(null,seq__17637_17655__$1);{
var G__17657 = cljs.core.chunk_rest.call(null,seq__17637_17655__$1);
var G__17658 = c__4189__auto___17656;
var G__17659 = cljs.core.count.call(null,c__4189__auto___17656);
var G__17660 = 0;
seq__17637_17643 = G__17657;
chunk__17638_17644 = G__17658;
count__17639_17645 = G__17659;
i__17640_17646 = G__17660;
continue;
}
} else
{var vec__17642_17661 = cljs.core.first.call(null,seq__17637_17655__$1);var name_17662 = cljs.core.nth.call(null,vec__17642_17661,0,null);var value_17663 = cljs.core.nth.call(null,vec__17642_17661,1,null);domina.set_attr_BANG_.call(null,content,name_17662,value_17663);
{
var G__17664 = cljs.core.next.call(null,seq__17637_17655__$1);
var G__17665 = null;
var G__17666 = 0;
var G__17667 = 0;
seq__17637_17643 = G__17664;
chunk__17638_17644 = G__17665;
count__17639_17645 = G__17666;
i__17640_17646 = G__17667;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17672_17676 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17673_17677 = null;var count__17674_17678 = 0;var i__17675_17679 = 0;while(true){
if((i__17675_17679 < count__17674_17678))
{var node_17680 = cljs.core._nth.call(null,chunk__17673_17677,i__17675_17679);goog.dom.classes.add(node_17680,class$);
{
var G__17681 = seq__17672_17676;
var G__17682 = chunk__17673_17677;
var G__17683 = count__17674_17678;
var G__17684 = (i__17675_17679 + 1);
seq__17672_17676 = G__17681;
chunk__17673_17677 = G__17682;
count__17674_17678 = G__17683;
i__17675_17679 = G__17684;
continue;
}
} else
{var temp__4092__auto___17685 = cljs.core.seq.call(null,seq__17672_17676);if(temp__4092__auto___17685)
{var seq__17672_17686__$1 = temp__4092__auto___17685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17672_17686__$1))
{var c__4189__auto___17687 = cljs.core.chunk_first.call(null,seq__17672_17686__$1);{
var G__17688 = cljs.core.chunk_rest.call(null,seq__17672_17686__$1);
var G__17689 = c__4189__auto___17687;
var G__17690 = cljs.core.count.call(null,c__4189__auto___17687);
var G__17691 = 0;
seq__17672_17676 = G__17688;
chunk__17673_17677 = G__17689;
count__17674_17678 = G__17690;
i__17675_17679 = G__17691;
continue;
}
} else
{var node_17692 = cljs.core.first.call(null,seq__17672_17686__$1);goog.dom.classes.add(node_17692,class$);
{
var G__17693 = cljs.core.next.call(null,seq__17672_17686__$1);
var G__17694 = null;
var G__17695 = 0;
var G__17696 = 0;
seq__17672_17676 = G__17693;
chunk__17673_17677 = G__17694;
count__17674_17678 = G__17695;
i__17675_17679 = G__17696;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17701_17705 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17702_17706 = null;var count__17703_17707 = 0;var i__17704_17708 = 0;while(true){
if((i__17704_17708 < count__17703_17707))
{var node_17709 = cljs.core._nth.call(null,chunk__17702_17706,i__17704_17708);goog.dom.classes.remove(node_17709,class$);
{
var G__17710 = seq__17701_17705;
var G__17711 = chunk__17702_17706;
var G__17712 = count__17703_17707;
var G__17713 = (i__17704_17708 + 1);
seq__17701_17705 = G__17710;
chunk__17702_17706 = G__17711;
count__17703_17707 = G__17712;
i__17704_17708 = G__17713;
continue;
}
} else
{var temp__4092__auto___17714 = cljs.core.seq.call(null,seq__17701_17705);if(temp__4092__auto___17714)
{var seq__17701_17715__$1 = temp__4092__auto___17714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17701_17715__$1))
{var c__4189__auto___17716 = cljs.core.chunk_first.call(null,seq__17701_17715__$1);{
var G__17717 = cljs.core.chunk_rest.call(null,seq__17701_17715__$1);
var G__17718 = c__4189__auto___17716;
var G__17719 = cljs.core.count.call(null,c__4189__auto___17716);
var G__17720 = 0;
seq__17701_17705 = G__17717;
chunk__17702_17706 = G__17718;
count__17703_17707 = G__17719;
i__17704_17708 = G__17720;
continue;
}
} else
{var node_17721 = cljs.core.first.call(null,seq__17701_17715__$1);goog.dom.classes.remove(node_17721,class$);
{
var G__17722 = cljs.core.next.call(null,seq__17701_17715__$1);
var G__17723 = null;
var G__17724 = 0;
var G__17725 = 0;
seq__17701_17705 = G__17722;
chunk__17702_17706 = G__17723;
count__17703_17707 = G__17724;
i__17704_17708 = G__17725;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17730_17734 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17731_17735 = null;var count__17732_17736 = 0;var i__17733_17737 = 0;while(true){
if((i__17733_17737 < count__17732_17736))
{var node_17738 = cljs.core._nth.call(null,chunk__17731_17735,i__17733_17737);goog.dom.classes.toggle(node_17738,class$);
{
var G__17739 = seq__17730_17734;
var G__17740 = chunk__17731_17735;
var G__17741 = count__17732_17736;
var G__17742 = (i__17733_17737 + 1);
seq__17730_17734 = G__17739;
chunk__17731_17735 = G__17740;
count__17732_17736 = G__17741;
i__17733_17737 = G__17742;
continue;
}
} else
{var temp__4092__auto___17743 = cljs.core.seq.call(null,seq__17730_17734);if(temp__4092__auto___17743)
{var seq__17730_17744__$1 = temp__4092__auto___17743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17730_17744__$1))
{var c__4189__auto___17745 = cljs.core.chunk_first.call(null,seq__17730_17744__$1);{
var G__17746 = cljs.core.chunk_rest.call(null,seq__17730_17744__$1);
var G__17747 = c__4189__auto___17745;
var G__17748 = cljs.core.count.call(null,c__4189__auto___17745);
var G__17749 = 0;
seq__17730_17734 = G__17746;
chunk__17731_17735 = G__17747;
count__17732_17736 = G__17748;
i__17733_17737 = G__17749;
continue;
}
} else
{var node_17750 = cljs.core.first.call(null,seq__17730_17744__$1);goog.dom.classes.toggle(node_17750,class$);
{
var G__17751 = cljs.core.next.call(null,seq__17730_17744__$1);
var G__17752 = null;
var G__17753 = 0;
var G__17754 = 0;
seq__17730_17734 = G__17751;
chunk__17731_17735 = G__17752;
count__17732_17736 = G__17753;
i__17733_17737 = G__17754;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17763__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17759_17764 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17760_17765 = null;var count__17761_17766 = 0;var i__17762_17767 = 0;while(true){
if((i__17762_17767 < count__17761_17766))
{var node_17768 = cljs.core._nth.call(null,chunk__17760_17765,i__17762_17767);goog.dom.classes.set(node_17768,classes_17763__$1);
{
var G__17769 = seq__17759_17764;
var G__17770 = chunk__17760_17765;
var G__17771 = count__17761_17766;
var G__17772 = (i__17762_17767 + 1);
seq__17759_17764 = G__17769;
chunk__17760_17765 = G__17770;
count__17761_17766 = G__17771;
i__17762_17767 = G__17772;
continue;
}
} else
{var temp__4092__auto___17773 = cljs.core.seq.call(null,seq__17759_17764);if(temp__4092__auto___17773)
{var seq__17759_17774__$1 = temp__4092__auto___17773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17759_17774__$1))
{var c__4189__auto___17775 = cljs.core.chunk_first.call(null,seq__17759_17774__$1);{
var G__17776 = cljs.core.chunk_rest.call(null,seq__17759_17774__$1);
var G__17777 = c__4189__auto___17775;
var G__17778 = cljs.core.count.call(null,c__4189__auto___17775);
var G__17779 = 0;
seq__17759_17764 = G__17776;
chunk__17760_17765 = G__17777;
count__17761_17766 = G__17778;
i__17762_17767 = G__17779;
continue;
}
} else
{var node_17780 = cljs.core.first.call(null,seq__17759_17774__$1);goog.dom.classes.set(node_17780,classes_17763__$1);
{
var G__17781 = cljs.core.next.call(null,seq__17759_17774__$1);
var G__17782 = null;
var G__17783 = 0;
var G__17784 = 0;
seq__17759_17764 = G__17781;
chunk__17760_17765 = G__17782;
count__17761_17766 = G__17783;
i__17762_17767 = G__17784;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17789_17793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17790_17794 = null;var count__17791_17795 = 0;var i__17792_17796 = 0;while(true){
if((i__17792_17796 < count__17791_17795))
{var node_17797 = cljs.core._nth.call(null,chunk__17790_17794,i__17792_17796);goog.dom.setTextContent(node_17797,value);
{
var G__17798 = seq__17789_17793;
var G__17799 = chunk__17790_17794;
var G__17800 = count__17791_17795;
var G__17801 = (i__17792_17796 + 1);
seq__17789_17793 = G__17798;
chunk__17790_17794 = G__17799;
count__17791_17795 = G__17800;
i__17792_17796 = G__17801;
continue;
}
} else
{var temp__4092__auto___17802 = cljs.core.seq.call(null,seq__17789_17793);if(temp__4092__auto___17802)
{var seq__17789_17803__$1 = temp__4092__auto___17802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17789_17803__$1))
{var c__4189__auto___17804 = cljs.core.chunk_first.call(null,seq__17789_17803__$1);{
var G__17805 = cljs.core.chunk_rest.call(null,seq__17789_17803__$1);
var G__17806 = c__4189__auto___17804;
var G__17807 = cljs.core.count.call(null,c__4189__auto___17804);
var G__17808 = 0;
seq__17789_17793 = G__17805;
chunk__17790_17794 = G__17806;
count__17791_17795 = G__17807;
i__17792_17796 = G__17808;
continue;
}
} else
{var node_17809 = cljs.core.first.call(null,seq__17789_17803__$1);goog.dom.setTextContent(node_17809,value);
{
var G__17810 = cljs.core.next.call(null,seq__17789_17803__$1);
var G__17811 = null;
var G__17812 = 0;
var G__17813 = 0;
seq__17789_17793 = G__17810;
chunk__17790_17794 = G__17811;
count__17791_17795 = G__17812;
i__17792_17796 = G__17813;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17818_17822 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17819_17823 = null;var count__17820_17824 = 0;var i__17821_17825 = 0;while(true){
if((i__17821_17825 < count__17820_17824))
{var node_17826 = cljs.core._nth.call(null,chunk__17819_17823,i__17821_17825);goog.dom.forms.setValue(node_17826,value);
{
var G__17827 = seq__17818_17822;
var G__17828 = chunk__17819_17823;
var G__17829 = count__17820_17824;
var G__17830 = (i__17821_17825 + 1);
seq__17818_17822 = G__17827;
chunk__17819_17823 = G__17828;
count__17820_17824 = G__17829;
i__17821_17825 = G__17830;
continue;
}
} else
{var temp__4092__auto___17831 = cljs.core.seq.call(null,seq__17818_17822);if(temp__4092__auto___17831)
{var seq__17818_17832__$1 = temp__4092__auto___17831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17818_17832__$1))
{var c__4189__auto___17833 = cljs.core.chunk_first.call(null,seq__17818_17832__$1);{
var G__17834 = cljs.core.chunk_rest.call(null,seq__17818_17832__$1);
var G__17835 = c__4189__auto___17833;
var G__17836 = cljs.core.count.call(null,c__4189__auto___17833);
var G__17837 = 0;
seq__17818_17822 = G__17834;
chunk__17819_17823 = G__17835;
count__17820_17824 = G__17836;
i__17821_17825 = G__17837;
continue;
}
} else
{var node_17838 = cljs.core.first.call(null,seq__17818_17832__$1);goog.dom.forms.setValue(node_17838,value);
{
var G__17839 = cljs.core.next.call(null,seq__17818_17832__$1);
var G__17840 = null;
var G__17841 = 0;
var G__17842 = 0;
seq__17818_17822 = G__17839;
chunk__17819_17823 = G__17840;
count__17820_17824 = G__17841;
i__17821_17825 = G__17842;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_17853 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17849_17854 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17850_17855 = null;var count__17851_17856 = 0;var i__17852_17857 = 0;while(true){
if((i__17852_17857 < count__17851_17856))
{var node_17858 = cljs.core._nth.call(null,chunk__17850_17855,i__17852_17857);node_17858.innerHTML = value_17853;
{
var G__17859 = seq__17849_17854;
var G__17860 = chunk__17850_17855;
var G__17861 = count__17851_17856;
var G__17862 = (i__17852_17857 + 1);
seq__17849_17854 = G__17859;
chunk__17850_17855 = G__17860;
count__17851_17856 = G__17861;
i__17852_17857 = G__17862;
continue;
}
} else
{var temp__4092__auto___17863 = cljs.core.seq.call(null,seq__17849_17854);if(temp__4092__auto___17863)
{var seq__17849_17864__$1 = temp__4092__auto___17863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17849_17864__$1))
{var c__4189__auto___17865 = cljs.core.chunk_first.call(null,seq__17849_17864__$1);{
var G__17866 = cljs.core.chunk_rest.call(null,seq__17849_17864__$1);
var G__17867 = c__4189__auto___17865;
var G__17868 = cljs.core.count.call(null,c__4189__auto___17865);
var G__17869 = 0;
seq__17849_17854 = G__17866;
chunk__17850_17855 = G__17867;
count__17851_17856 = G__17868;
i__17852_17857 = G__17869;
continue;
}
} else
{var node_17870 = cljs.core.first.call(null,seq__17849_17864__$1);node_17870.innerHTML = value_17853;
{
var G__17871 = cljs.core.next.call(null,seq__17849_17864__$1);
var G__17872 = null;
var G__17873 = 0;
var G__17874 = 0;
seq__17849_17854 = G__17871;
chunk__17850_17855 = G__17872;
count__17851_17856 = G__17873;
i__17852_17857 = G__17874;
continue;
}
}
} else
{}
}
break;
}
}catch (e17848){if((e17848 instanceof Error))
{var e_17875 = e17848;domina.replace_children_BANG_.call(null,content,value_17853);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17848;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17882_17886 = cljs.core.seq.call(null,children);var chunk__17883_17887 = null;var count__17884_17888 = 0;var i__17885_17889 = 0;while(true){
if((i__17885_17889 < count__17884_17888))
{var child_17890 = cljs.core._nth.call(null,chunk__17883_17887,i__17885_17889);frag.appendChild(child_17890);
{
var G__17891 = seq__17882_17886;
var G__17892 = chunk__17883_17887;
var G__17893 = count__17884_17888;
var G__17894 = (i__17885_17889 + 1);
seq__17882_17886 = G__17891;
chunk__17883_17887 = G__17892;
count__17884_17888 = G__17893;
i__17885_17889 = G__17894;
continue;
}
} else
{var temp__4092__auto___17895 = cljs.core.seq.call(null,seq__17882_17886);if(temp__4092__auto___17895)
{var seq__17882_17896__$1 = temp__4092__auto___17895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17882_17896__$1))
{var c__4189__auto___17897 = cljs.core.chunk_first.call(null,seq__17882_17896__$1);{
var G__17898 = cljs.core.chunk_rest.call(null,seq__17882_17896__$1);
var G__17899 = c__4189__auto___17897;
var G__17900 = cljs.core.count.call(null,c__4189__auto___17897);
var G__17901 = 0;
seq__17882_17886 = G__17898;
chunk__17883_17887 = G__17899;
count__17884_17888 = G__17900;
i__17885_17889 = G__17901;
continue;
}
} else
{var child_17902 = cljs.core.first.call(null,seq__17882_17896__$1);frag.appendChild(child_17902);
{
var G__17903 = cljs.core.next.call(null,seq__17882_17896__$1);
var G__17904 = null;
var G__17905 = 0;
var G__17906 = 0;
seq__17882_17886 = G__17903;
chunk__17883_17887 = G__17904;
count__17884_17888 = G__17905;
i__17885_17889 = G__17906;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17876_SHARP_,p2__17877_SHARP_){return f.call(null,p1__17876_SHARP_,p2__17877_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__17908 = list_thing;if(G__17908)
{var bit__4091__auto__ = (G__17908.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17908.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17908.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17908);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17908);
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
{if((function (){var G__17909 = content;if(G__17909)
{var bit__4091__auto__ = (G__17909.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17909.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17909.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17909);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17909);
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
{if((function (){var G__17910 = content;if(G__17910)
{var bit__4091__auto__ = (G__17910.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17910.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17910.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17910);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17910);
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
