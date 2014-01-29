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
var opt_wrapper_36414 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36415 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36416 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36415,table_section_wrapper_36415,opt_wrapper_36414,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36416,table_section_wrapper_36415,cell_wrapper_36416,opt_wrapper_36414,table_section_wrapper_36415,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36415]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36421 = cljs.core.seq.call(null,tbody);var chunk__36422 = null;var count__36423 = 0;var i__36424 = 0;while(true){
if((i__36424 < count__36423))
{var child = cljs.core._nth.call(null,chunk__36422,i__36424);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36425 = seq__36421;
var G__36426 = chunk__36422;
var G__36427 = count__36423;
var G__36428 = (i__36424 + 1);
seq__36421 = G__36425;
chunk__36422 = G__36426;
count__36423 = G__36427;
i__36424 = G__36428;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36421);if(temp__4092__auto__)
{var seq__36421__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36421__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36421__$1);{
var G__36429 = cljs.core.chunk_rest.call(null,seq__36421__$1);
var G__36430 = c__4148__auto__;
var G__36431 = cljs.core.count.call(null,c__4148__auto__);
var G__36432 = 0;
seq__36421 = G__36429;
chunk__36422 = G__36430;
count__36423 = G__36431;
i__36424 = G__36432;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36421__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36433 = cljs.core.next.call(null,seq__36421__$1);
var G__36434 = null;
var G__36435 = 0;
var G__36436 = 0;
seq__36421 = G__36433;
chunk__36422 = G__36434;
count__36423 = G__36435;
i__36424 = G__36436;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36438 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36438,0,null);var start_wrap = cljs.core.nth.call(null,vec__36438,1,null);var end_wrap = cljs.core.nth.call(null,vec__36438,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36439 = wrapper.lastChild;
var G__36440 = (level - 1);
wrapper = G__36439;
level = G__36440;
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
domina.DomContent = (function (){var obj36442 = {};return obj36442;
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
log_debug.cljs$lang$applyTo = (function (arglist__36443){
var mesg = cljs.core.seq(arglist__36443);
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
log.cljs$lang$applyTo = (function (arglist__36444){
var mesg = cljs.core.seq(arglist__36444);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36445){
var contents = cljs.core.seq(arglist__36445);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36446_SHARP_){return p1__36446_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36447_SHARP_,p2__36448_SHARP_){return goog.dom.insertChildAt(p1__36447_SHARP_,p2__36448_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36450_SHARP_,p2__36449_SHARP_){return goog.dom.insertSiblingBefore(p2__36449_SHARP_,p1__36450_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36452_SHARP_,p2__36451_SHARP_){return goog.dom.insertSiblingAfter(p2__36451_SHARP_,p1__36452_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36454_SHARP_,p2__36453_SHARP_){return goog.dom.replaceNode(p2__36453_SHARP_,p1__36454_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36459_36463 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36460_36464 = null;var count__36461_36465 = 0;var i__36462_36466 = 0;while(true){
if((i__36462_36466 < count__36461_36465))
{var n_36467 = cljs.core._nth.call(null,chunk__36460_36464,i__36462_36466);goog.style.setStyle(n_36467,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36468 = seq__36459_36463;
var G__36469 = chunk__36460_36464;
var G__36470 = count__36461_36465;
var G__36471 = (i__36462_36466 + 1);
seq__36459_36463 = G__36468;
chunk__36460_36464 = G__36469;
count__36461_36465 = G__36470;
i__36462_36466 = G__36471;
continue;
}
} else
{var temp__4092__auto___36472 = cljs.core.seq.call(null,seq__36459_36463);if(temp__4092__auto___36472)
{var seq__36459_36473__$1 = temp__4092__auto___36472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36459_36473__$1))
{var c__4148__auto___36474 = cljs.core.chunk_first.call(null,seq__36459_36473__$1);{
var G__36475 = cljs.core.chunk_rest.call(null,seq__36459_36473__$1);
var G__36476 = c__4148__auto___36474;
var G__36477 = cljs.core.count.call(null,c__4148__auto___36474);
var G__36478 = 0;
seq__36459_36463 = G__36475;
chunk__36460_36464 = G__36476;
count__36461_36465 = G__36477;
i__36462_36466 = G__36478;
continue;
}
} else
{var n_36479 = cljs.core.first.call(null,seq__36459_36473__$1);goog.style.setStyle(n_36479,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36480 = cljs.core.next.call(null,seq__36459_36473__$1);
var G__36481 = null;
var G__36482 = 0;
var G__36483 = 0;
seq__36459_36463 = G__36480;
chunk__36460_36464 = G__36481;
count__36461_36465 = G__36482;
i__36462_36466 = G__36483;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36484){
var content = cljs.core.first(arglist__36484);
arglist__36484 = cljs.core.next(arglist__36484);
var name = cljs.core.first(arglist__36484);
var value = cljs.core.rest(arglist__36484);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36489_36493 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36490_36494 = null;var count__36491_36495 = 0;var i__36492_36496 = 0;while(true){
if((i__36492_36496 < count__36491_36495))
{var n_36497 = cljs.core._nth.call(null,chunk__36490_36494,i__36492_36496);n_36497.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36498 = seq__36489_36493;
var G__36499 = chunk__36490_36494;
var G__36500 = count__36491_36495;
var G__36501 = (i__36492_36496 + 1);
seq__36489_36493 = G__36498;
chunk__36490_36494 = G__36499;
count__36491_36495 = G__36500;
i__36492_36496 = G__36501;
continue;
}
} else
{var temp__4092__auto___36502 = cljs.core.seq.call(null,seq__36489_36493);if(temp__4092__auto___36502)
{var seq__36489_36503__$1 = temp__4092__auto___36502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36489_36503__$1))
{var c__4148__auto___36504 = cljs.core.chunk_first.call(null,seq__36489_36503__$1);{
var G__36505 = cljs.core.chunk_rest.call(null,seq__36489_36503__$1);
var G__36506 = c__4148__auto___36504;
var G__36507 = cljs.core.count.call(null,c__4148__auto___36504);
var G__36508 = 0;
seq__36489_36493 = G__36505;
chunk__36490_36494 = G__36506;
count__36491_36495 = G__36507;
i__36492_36496 = G__36508;
continue;
}
} else
{var n_36509 = cljs.core.first.call(null,seq__36489_36503__$1);n_36509.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36510 = cljs.core.next.call(null,seq__36489_36503__$1);
var G__36511 = null;
var G__36512 = 0;
var G__36513 = 0;
seq__36489_36493 = G__36510;
chunk__36490_36494 = G__36511;
count__36491_36495 = G__36512;
i__36492_36496 = G__36513;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36514){
var content = cljs.core.first(arglist__36514);
arglist__36514 = cljs.core.next(arglist__36514);
var name = cljs.core.first(arglist__36514);
var value = cljs.core.rest(arglist__36514);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36519_36523 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36520_36524 = null;var count__36521_36525 = 0;var i__36522_36526 = 0;while(true){
if((i__36522_36526 < count__36521_36525))
{var n_36527 = cljs.core._nth.call(null,chunk__36520_36524,i__36522_36526);n_36527.removeAttribute(cljs.core.name.call(null,name));
{
var G__36528 = seq__36519_36523;
var G__36529 = chunk__36520_36524;
var G__36530 = count__36521_36525;
var G__36531 = (i__36522_36526 + 1);
seq__36519_36523 = G__36528;
chunk__36520_36524 = G__36529;
count__36521_36525 = G__36530;
i__36522_36526 = G__36531;
continue;
}
} else
{var temp__4092__auto___36532 = cljs.core.seq.call(null,seq__36519_36523);if(temp__4092__auto___36532)
{var seq__36519_36533__$1 = temp__4092__auto___36532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36519_36533__$1))
{var c__4148__auto___36534 = cljs.core.chunk_first.call(null,seq__36519_36533__$1);{
var G__36535 = cljs.core.chunk_rest.call(null,seq__36519_36533__$1);
var G__36536 = c__4148__auto___36534;
var G__36537 = cljs.core.count.call(null,c__4148__auto___36534);
var G__36538 = 0;
seq__36519_36523 = G__36535;
chunk__36520_36524 = G__36536;
count__36521_36525 = G__36537;
i__36522_36526 = G__36538;
continue;
}
} else
{var n_36539 = cljs.core.first.call(null,seq__36519_36533__$1);n_36539.removeAttribute(cljs.core.name.call(null,name));
{
var G__36540 = cljs.core.next.call(null,seq__36519_36533__$1);
var G__36541 = null;
var G__36542 = 0;
var G__36543 = 0;
seq__36519_36523 = G__36540;
chunk__36520_36524 = G__36541;
count__36521_36525 = G__36542;
i__36522_36526 = G__36543;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36545 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36545,0,null);var v = cljs.core.nth.call(null,vec__36545,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36546_SHARP_){var attr = attrs__$1.item(p1__36546_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36553_36559 = cljs.core.seq.call(null,styles);var chunk__36554_36560 = null;var count__36555_36561 = 0;var i__36556_36562 = 0;while(true){
if((i__36556_36562 < count__36555_36561))
{var vec__36557_36563 = cljs.core._nth.call(null,chunk__36554_36560,i__36556_36562);var name_36564 = cljs.core.nth.call(null,vec__36557_36563,0,null);var value_36565 = cljs.core.nth.call(null,vec__36557_36563,1,null);domina.set_style_BANG_.call(null,content,name_36564,value_36565);
{
var G__36566 = seq__36553_36559;
var G__36567 = chunk__36554_36560;
var G__36568 = count__36555_36561;
var G__36569 = (i__36556_36562 + 1);
seq__36553_36559 = G__36566;
chunk__36554_36560 = G__36567;
count__36555_36561 = G__36568;
i__36556_36562 = G__36569;
continue;
}
} else
{var temp__4092__auto___36570 = cljs.core.seq.call(null,seq__36553_36559);if(temp__4092__auto___36570)
{var seq__36553_36571__$1 = temp__4092__auto___36570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36553_36571__$1))
{var c__4148__auto___36572 = cljs.core.chunk_first.call(null,seq__36553_36571__$1);{
var G__36573 = cljs.core.chunk_rest.call(null,seq__36553_36571__$1);
var G__36574 = c__4148__auto___36572;
var G__36575 = cljs.core.count.call(null,c__4148__auto___36572);
var G__36576 = 0;
seq__36553_36559 = G__36573;
chunk__36554_36560 = G__36574;
count__36555_36561 = G__36575;
i__36556_36562 = G__36576;
continue;
}
} else
{var vec__36558_36577 = cljs.core.first.call(null,seq__36553_36571__$1);var name_36578 = cljs.core.nth.call(null,vec__36558_36577,0,null);var value_36579 = cljs.core.nth.call(null,vec__36558_36577,1,null);domina.set_style_BANG_.call(null,content,name_36578,value_36579);
{
var G__36580 = cljs.core.next.call(null,seq__36553_36571__$1);
var G__36581 = null;
var G__36582 = 0;
var G__36583 = 0;
seq__36553_36559 = G__36580;
chunk__36554_36560 = G__36581;
count__36555_36561 = G__36582;
i__36556_36562 = G__36583;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36590_36596 = cljs.core.seq.call(null,attrs);var chunk__36591_36597 = null;var count__36592_36598 = 0;var i__36593_36599 = 0;while(true){
if((i__36593_36599 < count__36592_36598))
{var vec__36594_36600 = cljs.core._nth.call(null,chunk__36591_36597,i__36593_36599);var name_36601 = cljs.core.nth.call(null,vec__36594_36600,0,null);var value_36602 = cljs.core.nth.call(null,vec__36594_36600,1,null);domina.set_attr_BANG_.call(null,content,name_36601,value_36602);
{
var G__36603 = seq__36590_36596;
var G__36604 = chunk__36591_36597;
var G__36605 = count__36592_36598;
var G__36606 = (i__36593_36599 + 1);
seq__36590_36596 = G__36603;
chunk__36591_36597 = G__36604;
count__36592_36598 = G__36605;
i__36593_36599 = G__36606;
continue;
}
} else
{var temp__4092__auto___36607 = cljs.core.seq.call(null,seq__36590_36596);if(temp__4092__auto___36607)
{var seq__36590_36608__$1 = temp__4092__auto___36607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36590_36608__$1))
{var c__4148__auto___36609 = cljs.core.chunk_first.call(null,seq__36590_36608__$1);{
var G__36610 = cljs.core.chunk_rest.call(null,seq__36590_36608__$1);
var G__36611 = c__4148__auto___36609;
var G__36612 = cljs.core.count.call(null,c__4148__auto___36609);
var G__36613 = 0;
seq__36590_36596 = G__36610;
chunk__36591_36597 = G__36611;
count__36592_36598 = G__36612;
i__36593_36599 = G__36613;
continue;
}
} else
{var vec__36595_36614 = cljs.core.first.call(null,seq__36590_36608__$1);var name_36615 = cljs.core.nth.call(null,vec__36595_36614,0,null);var value_36616 = cljs.core.nth.call(null,vec__36595_36614,1,null);domina.set_attr_BANG_.call(null,content,name_36615,value_36616);
{
var G__36617 = cljs.core.next.call(null,seq__36590_36608__$1);
var G__36618 = null;
var G__36619 = 0;
var G__36620 = 0;
seq__36590_36596 = G__36617;
chunk__36591_36597 = G__36618;
count__36592_36598 = G__36619;
i__36593_36599 = G__36620;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36625_36629 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36626_36630 = null;var count__36627_36631 = 0;var i__36628_36632 = 0;while(true){
if((i__36628_36632 < count__36627_36631))
{var node_36633 = cljs.core._nth.call(null,chunk__36626_36630,i__36628_36632);goog.dom.classes.add(node_36633,class$);
{
var G__36634 = seq__36625_36629;
var G__36635 = chunk__36626_36630;
var G__36636 = count__36627_36631;
var G__36637 = (i__36628_36632 + 1);
seq__36625_36629 = G__36634;
chunk__36626_36630 = G__36635;
count__36627_36631 = G__36636;
i__36628_36632 = G__36637;
continue;
}
} else
{var temp__4092__auto___36638 = cljs.core.seq.call(null,seq__36625_36629);if(temp__4092__auto___36638)
{var seq__36625_36639__$1 = temp__4092__auto___36638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36625_36639__$1))
{var c__4148__auto___36640 = cljs.core.chunk_first.call(null,seq__36625_36639__$1);{
var G__36641 = cljs.core.chunk_rest.call(null,seq__36625_36639__$1);
var G__36642 = c__4148__auto___36640;
var G__36643 = cljs.core.count.call(null,c__4148__auto___36640);
var G__36644 = 0;
seq__36625_36629 = G__36641;
chunk__36626_36630 = G__36642;
count__36627_36631 = G__36643;
i__36628_36632 = G__36644;
continue;
}
} else
{var node_36645 = cljs.core.first.call(null,seq__36625_36639__$1);goog.dom.classes.add(node_36645,class$);
{
var G__36646 = cljs.core.next.call(null,seq__36625_36639__$1);
var G__36647 = null;
var G__36648 = 0;
var G__36649 = 0;
seq__36625_36629 = G__36646;
chunk__36626_36630 = G__36647;
count__36627_36631 = G__36648;
i__36628_36632 = G__36649;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36654_36658 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36655_36659 = null;var count__36656_36660 = 0;var i__36657_36661 = 0;while(true){
if((i__36657_36661 < count__36656_36660))
{var node_36662 = cljs.core._nth.call(null,chunk__36655_36659,i__36657_36661);goog.dom.classes.remove(node_36662,class$);
{
var G__36663 = seq__36654_36658;
var G__36664 = chunk__36655_36659;
var G__36665 = count__36656_36660;
var G__36666 = (i__36657_36661 + 1);
seq__36654_36658 = G__36663;
chunk__36655_36659 = G__36664;
count__36656_36660 = G__36665;
i__36657_36661 = G__36666;
continue;
}
} else
{var temp__4092__auto___36667 = cljs.core.seq.call(null,seq__36654_36658);if(temp__4092__auto___36667)
{var seq__36654_36668__$1 = temp__4092__auto___36667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36654_36668__$1))
{var c__4148__auto___36669 = cljs.core.chunk_first.call(null,seq__36654_36668__$1);{
var G__36670 = cljs.core.chunk_rest.call(null,seq__36654_36668__$1);
var G__36671 = c__4148__auto___36669;
var G__36672 = cljs.core.count.call(null,c__4148__auto___36669);
var G__36673 = 0;
seq__36654_36658 = G__36670;
chunk__36655_36659 = G__36671;
count__36656_36660 = G__36672;
i__36657_36661 = G__36673;
continue;
}
} else
{var node_36674 = cljs.core.first.call(null,seq__36654_36668__$1);goog.dom.classes.remove(node_36674,class$);
{
var G__36675 = cljs.core.next.call(null,seq__36654_36668__$1);
var G__36676 = null;
var G__36677 = 0;
var G__36678 = 0;
seq__36654_36658 = G__36675;
chunk__36655_36659 = G__36676;
count__36656_36660 = G__36677;
i__36657_36661 = G__36678;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36683_36687 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36684_36688 = null;var count__36685_36689 = 0;var i__36686_36690 = 0;while(true){
if((i__36686_36690 < count__36685_36689))
{var node_36691 = cljs.core._nth.call(null,chunk__36684_36688,i__36686_36690);goog.dom.classes.toggle(node_36691,class$);
{
var G__36692 = seq__36683_36687;
var G__36693 = chunk__36684_36688;
var G__36694 = count__36685_36689;
var G__36695 = (i__36686_36690 + 1);
seq__36683_36687 = G__36692;
chunk__36684_36688 = G__36693;
count__36685_36689 = G__36694;
i__36686_36690 = G__36695;
continue;
}
} else
{var temp__4092__auto___36696 = cljs.core.seq.call(null,seq__36683_36687);if(temp__4092__auto___36696)
{var seq__36683_36697__$1 = temp__4092__auto___36696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36683_36697__$1))
{var c__4148__auto___36698 = cljs.core.chunk_first.call(null,seq__36683_36697__$1);{
var G__36699 = cljs.core.chunk_rest.call(null,seq__36683_36697__$1);
var G__36700 = c__4148__auto___36698;
var G__36701 = cljs.core.count.call(null,c__4148__auto___36698);
var G__36702 = 0;
seq__36683_36687 = G__36699;
chunk__36684_36688 = G__36700;
count__36685_36689 = G__36701;
i__36686_36690 = G__36702;
continue;
}
} else
{var node_36703 = cljs.core.first.call(null,seq__36683_36697__$1);goog.dom.classes.toggle(node_36703,class$);
{
var G__36704 = cljs.core.next.call(null,seq__36683_36697__$1);
var G__36705 = null;
var G__36706 = 0;
var G__36707 = 0;
seq__36683_36687 = G__36704;
chunk__36684_36688 = G__36705;
count__36685_36689 = G__36706;
i__36686_36690 = G__36707;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36716__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36712_36717 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36713_36718 = null;var count__36714_36719 = 0;var i__36715_36720 = 0;while(true){
if((i__36715_36720 < count__36714_36719))
{var node_36721 = cljs.core._nth.call(null,chunk__36713_36718,i__36715_36720);goog.dom.classes.set(node_36721,classes_36716__$1);
{
var G__36722 = seq__36712_36717;
var G__36723 = chunk__36713_36718;
var G__36724 = count__36714_36719;
var G__36725 = (i__36715_36720 + 1);
seq__36712_36717 = G__36722;
chunk__36713_36718 = G__36723;
count__36714_36719 = G__36724;
i__36715_36720 = G__36725;
continue;
}
} else
{var temp__4092__auto___36726 = cljs.core.seq.call(null,seq__36712_36717);if(temp__4092__auto___36726)
{var seq__36712_36727__$1 = temp__4092__auto___36726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36712_36727__$1))
{var c__4148__auto___36728 = cljs.core.chunk_first.call(null,seq__36712_36727__$1);{
var G__36729 = cljs.core.chunk_rest.call(null,seq__36712_36727__$1);
var G__36730 = c__4148__auto___36728;
var G__36731 = cljs.core.count.call(null,c__4148__auto___36728);
var G__36732 = 0;
seq__36712_36717 = G__36729;
chunk__36713_36718 = G__36730;
count__36714_36719 = G__36731;
i__36715_36720 = G__36732;
continue;
}
} else
{var node_36733 = cljs.core.first.call(null,seq__36712_36727__$1);goog.dom.classes.set(node_36733,classes_36716__$1);
{
var G__36734 = cljs.core.next.call(null,seq__36712_36727__$1);
var G__36735 = null;
var G__36736 = 0;
var G__36737 = 0;
seq__36712_36717 = G__36734;
chunk__36713_36718 = G__36735;
count__36714_36719 = G__36736;
i__36715_36720 = G__36737;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36742_36746 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36743_36747 = null;var count__36744_36748 = 0;var i__36745_36749 = 0;while(true){
if((i__36745_36749 < count__36744_36748))
{var node_36750 = cljs.core._nth.call(null,chunk__36743_36747,i__36745_36749);goog.dom.setTextContent(node_36750,value);
{
var G__36751 = seq__36742_36746;
var G__36752 = chunk__36743_36747;
var G__36753 = count__36744_36748;
var G__36754 = (i__36745_36749 + 1);
seq__36742_36746 = G__36751;
chunk__36743_36747 = G__36752;
count__36744_36748 = G__36753;
i__36745_36749 = G__36754;
continue;
}
} else
{var temp__4092__auto___36755 = cljs.core.seq.call(null,seq__36742_36746);if(temp__4092__auto___36755)
{var seq__36742_36756__$1 = temp__4092__auto___36755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36742_36756__$1))
{var c__4148__auto___36757 = cljs.core.chunk_first.call(null,seq__36742_36756__$1);{
var G__36758 = cljs.core.chunk_rest.call(null,seq__36742_36756__$1);
var G__36759 = c__4148__auto___36757;
var G__36760 = cljs.core.count.call(null,c__4148__auto___36757);
var G__36761 = 0;
seq__36742_36746 = G__36758;
chunk__36743_36747 = G__36759;
count__36744_36748 = G__36760;
i__36745_36749 = G__36761;
continue;
}
} else
{var node_36762 = cljs.core.first.call(null,seq__36742_36756__$1);goog.dom.setTextContent(node_36762,value);
{
var G__36763 = cljs.core.next.call(null,seq__36742_36756__$1);
var G__36764 = null;
var G__36765 = 0;
var G__36766 = 0;
seq__36742_36746 = G__36763;
chunk__36743_36747 = G__36764;
count__36744_36748 = G__36765;
i__36745_36749 = G__36766;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36771_36775 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36772_36776 = null;var count__36773_36777 = 0;var i__36774_36778 = 0;while(true){
if((i__36774_36778 < count__36773_36777))
{var node_36779 = cljs.core._nth.call(null,chunk__36772_36776,i__36774_36778);goog.dom.forms.setValue(node_36779,value);
{
var G__36780 = seq__36771_36775;
var G__36781 = chunk__36772_36776;
var G__36782 = count__36773_36777;
var G__36783 = (i__36774_36778 + 1);
seq__36771_36775 = G__36780;
chunk__36772_36776 = G__36781;
count__36773_36777 = G__36782;
i__36774_36778 = G__36783;
continue;
}
} else
{var temp__4092__auto___36784 = cljs.core.seq.call(null,seq__36771_36775);if(temp__4092__auto___36784)
{var seq__36771_36785__$1 = temp__4092__auto___36784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36771_36785__$1))
{var c__4148__auto___36786 = cljs.core.chunk_first.call(null,seq__36771_36785__$1);{
var G__36787 = cljs.core.chunk_rest.call(null,seq__36771_36785__$1);
var G__36788 = c__4148__auto___36786;
var G__36789 = cljs.core.count.call(null,c__4148__auto___36786);
var G__36790 = 0;
seq__36771_36775 = G__36787;
chunk__36772_36776 = G__36788;
count__36773_36777 = G__36789;
i__36774_36778 = G__36790;
continue;
}
} else
{var node_36791 = cljs.core.first.call(null,seq__36771_36785__$1);goog.dom.forms.setValue(node_36791,value);
{
var G__36792 = cljs.core.next.call(null,seq__36771_36785__$1);
var G__36793 = null;
var G__36794 = 0;
var G__36795 = 0;
seq__36771_36775 = G__36792;
chunk__36772_36776 = G__36793;
count__36773_36777 = G__36794;
i__36774_36778 = G__36795;
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
{var value_36806 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36802_36807 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36803_36808 = null;var count__36804_36809 = 0;var i__36805_36810 = 0;while(true){
if((i__36805_36810 < count__36804_36809))
{var node_36811 = cljs.core._nth.call(null,chunk__36803_36808,i__36805_36810);node_36811.innerHTML = value_36806;
{
var G__36812 = seq__36802_36807;
var G__36813 = chunk__36803_36808;
var G__36814 = count__36804_36809;
var G__36815 = (i__36805_36810 + 1);
seq__36802_36807 = G__36812;
chunk__36803_36808 = G__36813;
count__36804_36809 = G__36814;
i__36805_36810 = G__36815;
continue;
}
} else
{var temp__4092__auto___36816 = cljs.core.seq.call(null,seq__36802_36807);if(temp__4092__auto___36816)
{var seq__36802_36817__$1 = temp__4092__auto___36816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36802_36817__$1))
{var c__4148__auto___36818 = cljs.core.chunk_first.call(null,seq__36802_36817__$1);{
var G__36819 = cljs.core.chunk_rest.call(null,seq__36802_36817__$1);
var G__36820 = c__4148__auto___36818;
var G__36821 = cljs.core.count.call(null,c__4148__auto___36818);
var G__36822 = 0;
seq__36802_36807 = G__36819;
chunk__36803_36808 = G__36820;
count__36804_36809 = G__36821;
i__36805_36810 = G__36822;
continue;
}
} else
{var node_36823 = cljs.core.first.call(null,seq__36802_36817__$1);node_36823.innerHTML = value_36806;
{
var G__36824 = cljs.core.next.call(null,seq__36802_36817__$1);
var G__36825 = null;
var G__36826 = 0;
var G__36827 = 0;
seq__36802_36807 = G__36824;
chunk__36803_36808 = G__36825;
count__36804_36809 = G__36826;
i__36805_36810 = G__36827;
continue;
}
}
} else
{}
}
break;
}
}catch (e36801){if((e36801 instanceof Error))
{var e_36828 = e36801;domina.replace_children_BANG_.call(null,content,value_36806);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36801;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36835_36839 = cljs.core.seq.call(null,children);var chunk__36836_36840 = null;var count__36837_36841 = 0;var i__36838_36842 = 0;while(true){
if((i__36838_36842 < count__36837_36841))
{var child_36843 = cljs.core._nth.call(null,chunk__36836_36840,i__36838_36842);frag.appendChild(child_36843);
{
var G__36844 = seq__36835_36839;
var G__36845 = chunk__36836_36840;
var G__36846 = count__36837_36841;
var G__36847 = (i__36838_36842 + 1);
seq__36835_36839 = G__36844;
chunk__36836_36840 = G__36845;
count__36837_36841 = G__36846;
i__36838_36842 = G__36847;
continue;
}
} else
{var temp__4092__auto___36848 = cljs.core.seq.call(null,seq__36835_36839);if(temp__4092__auto___36848)
{var seq__36835_36849__$1 = temp__4092__auto___36848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36835_36849__$1))
{var c__4148__auto___36850 = cljs.core.chunk_first.call(null,seq__36835_36849__$1);{
var G__36851 = cljs.core.chunk_rest.call(null,seq__36835_36849__$1);
var G__36852 = c__4148__auto___36850;
var G__36853 = cljs.core.count.call(null,c__4148__auto___36850);
var G__36854 = 0;
seq__36835_36839 = G__36851;
chunk__36836_36840 = G__36852;
count__36837_36841 = G__36853;
i__36838_36842 = G__36854;
continue;
}
} else
{var child_36855 = cljs.core.first.call(null,seq__36835_36849__$1);frag.appendChild(child_36855);
{
var G__36856 = cljs.core.next.call(null,seq__36835_36849__$1);
var G__36857 = null;
var G__36858 = 0;
var G__36859 = 0;
seq__36835_36839 = G__36856;
chunk__36836_36840 = G__36857;
count__36837_36841 = G__36858;
i__36838_36842 = G__36859;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36829_SHARP_,p2__36830_SHARP_){return f.call(null,p1__36829_SHARP_,p2__36830_SHARP_);
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
{if((function (){var G__36861 = list_thing;if(G__36861)
{var bit__4050__auto__ = (G__36861.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36861.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36861.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36861);
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
{if((function (){var G__36862 = content;if(G__36862)
{var bit__4050__auto__ = (G__36862.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36862.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36862.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36862);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36862);
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
{if((function (){var G__36863 = content;if(G__36863)
{var bit__4050__auto__ = (G__36863.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36863.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36863.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36863);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36863);
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
