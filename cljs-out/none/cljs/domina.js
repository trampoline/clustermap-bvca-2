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
var opt_wrapper_17012 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17013 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17014 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17013,table_section_wrapper_17013,opt_wrapper_17012,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17014,table_section_wrapper_17013,cell_wrapper_17014,opt_wrapper_17012,table_section_wrapper_17013,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17013]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17019 = cljs.core.seq.call(null,tbody);var chunk__17020 = null;var count__17021 = 0;var i__17022 = 0;while(true){
if((i__17022 < count__17021))
{var child = cljs.core._nth.call(null,chunk__17020,i__17022);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17023 = seq__17019;
var G__17024 = chunk__17020;
var G__17025 = count__17021;
var G__17026 = (i__17022 + 1);
seq__17019 = G__17023;
chunk__17020 = G__17024;
count__17021 = G__17025;
i__17022 = G__17026;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17019);if(temp__4092__auto__)
{var seq__17019__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17019__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17019__$1);{
var G__17027 = cljs.core.chunk_rest.call(null,seq__17019__$1);
var G__17028 = c__4148__auto__;
var G__17029 = cljs.core.count.call(null,c__4148__auto__);
var G__17030 = 0;
seq__17019 = G__17027;
chunk__17020 = G__17028;
count__17021 = G__17029;
i__17022 = G__17030;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17019__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17031 = cljs.core.next.call(null,seq__17019__$1);
var G__17032 = null;
var G__17033 = 0;
var G__17034 = 0;
seq__17019 = G__17031;
chunk__17020 = G__17032;
count__17021 = G__17033;
i__17022 = G__17034;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17036 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17036,0,null);var start_wrap = cljs.core.nth.call(null,vec__17036,1,null);var end_wrap = cljs.core.nth.call(null,vec__17036,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17037 = wrapper.lastChild;
var G__17038 = (level - 1);
wrapper = G__17037;
level = G__17038;
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
domina.DomContent = (function (){var obj17040 = {};return obj17040;
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
log_debug.cljs$lang$applyTo = (function (arglist__17041){
var mesg = cljs.core.seq(arglist__17041);
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
log.cljs$lang$applyTo = (function (arglist__17042){
var mesg = cljs.core.seq(arglist__17042);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17043){
var contents = cljs.core.seq(arglist__17043);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17044_SHARP_){return p1__17044_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17045_SHARP_,p2__17046_SHARP_){return goog.dom.insertChildAt(p1__17045_SHARP_,p2__17046_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17048_SHARP_,p2__17047_SHARP_){return goog.dom.insertSiblingBefore(p2__17047_SHARP_,p1__17048_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17050_SHARP_,p2__17049_SHARP_){return goog.dom.insertSiblingAfter(p2__17049_SHARP_,p1__17050_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17052_SHARP_,p2__17051_SHARP_){return goog.dom.replaceNode(p2__17051_SHARP_,p1__17052_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17057_17061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17058_17062 = null;var count__17059_17063 = 0;var i__17060_17064 = 0;while(true){
if((i__17060_17064 < count__17059_17063))
{var n_17065 = cljs.core._nth.call(null,chunk__17058_17062,i__17060_17064);goog.style.setStyle(n_17065,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17066 = seq__17057_17061;
var G__17067 = chunk__17058_17062;
var G__17068 = count__17059_17063;
var G__17069 = (i__17060_17064 + 1);
seq__17057_17061 = G__17066;
chunk__17058_17062 = G__17067;
count__17059_17063 = G__17068;
i__17060_17064 = G__17069;
continue;
}
} else
{var temp__4092__auto___17070 = cljs.core.seq.call(null,seq__17057_17061);if(temp__4092__auto___17070)
{var seq__17057_17071__$1 = temp__4092__auto___17070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17057_17071__$1))
{var c__4148__auto___17072 = cljs.core.chunk_first.call(null,seq__17057_17071__$1);{
var G__17073 = cljs.core.chunk_rest.call(null,seq__17057_17071__$1);
var G__17074 = c__4148__auto___17072;
var G__17075 = cljs.core.count.call(null,c__4148__auto___17072);
var G__17076 = 0;
seq__17057_17061 = G__17073;
chunk__17058_17062 = G__17074;
count__17059_17063 = G__17075;
i__17060_17064 = G__17076;
continue;
}
} else
{var n_17077 = cljs.core.first.call(null,seq__17057_17071__$1);goog.style.setStyle(n_17077,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17078 = cljs.core.next.call(null,seq__17057_17071__$1);
var G__17079 = null;
var G__17080 = 0;
var G__17081 = 0;
seq__17057_17061 = G__17078;
chunk__17058_17062 = G__17079;
count__17059_17063 = G__17080;
i__17060_17064 = G__17081;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17082){
var content = cljs.core.first(arglist__17082);
arglist__17082 = cljs.core.next(arglist__17082);
var name = cljs.core.first(arglist__17082);
var value = cljs.core.rest(arglist__17082);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17087_17091 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17088_17092 = null;var count__17089_17093 = 0;var i__17090_17094 = 0;while(true){
if((i__17090_17094 < count__17089_17093))
{var n_17095 = cljs.core._nth.call(null,chunk__17088_17092,i__17090_17094);n_17095.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17096 = seq__17087_17091;
var G__17097 = chunk__17088_17092;
var G__17098 = count__17089_17093;
var G__17099 = (i__17090_17094 + 1);
seq__17087_17091 = G__17096;
chunk__17088_17092 = G__17097;
count__17089_17093 = G__17098;
i__17090_17094 = G__17099;
continue;
}
} else
{var temp__4092__auto___17100 = cljs.core.seq.call(null,seq__17087_17091);if(temp__4092__auto___17100)
{var seq__17087_17101__$1 = temp__4092__auto___17100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17087_17101__$1))
{var c__4148__auto___17102 = cljs.core.chunk_first.call(null,seq__17087_17101__$1);{
var G__17103 = cljs.core.chunk_rest.call(null,seq__17087_17101__$1);
var G__17104 = c__4148__auto___17102;
var G__17105 = cljs.core.count.call(null,c__4148__auto___17102);
var G__17106 = 0;
seq__17087_17091 = G__17103;
chunk__17088_17092 = G__17104;
count__17089_17093 = G__17105;
i__17090_17094 = G__17106;
continue;
}
} else
{var n_17107 = cljs.core.first.call(null,seq__17087_17101__$1);n_17107.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17108 = cljs.core.next.call(null,seq__17087_17101__$1);
var G__17109 = null;
var G__17110 = 0;
var G__17111 = 0;
seq__17087_17091 = G__17108;
chunk__17088_17092 = G__17109;
count__17089_17093 = G__17110;
i__17090_17094 = G__17111;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17112){
var content = cljs.core.first(arglist__17112);
arglist__17112 = cljs.core.next(arglist__17112);
var name = cljs.core.first(arglist__17112);
var value = cljs.core.rest(arglist__17112);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17117_17121 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17118_17122 = null;var count__17119_17123 = 0;var i__17120_17124 = 0;while(true){
if((i__17120_17124 < count__17119_17123))
{var n_17125 = cljs.core._nth.call(null,chunk__17118_17122,i__17120_17124);n_17125.removeAttribute(cljs.core.name.call(null,name));
{
var G__17126 = seq__17117_17121;
var G__17127 = chunk__17118_17122;
var G__17128 = count__17119_17123;
var G__17129 = (i__17120_17124 + 1);
seq__17117_17121 = G__17126;
chunk__17118_17122 = G__17127;
count__17119_17123 = G__17128;
i__17120_17124 = G__17129;
continue;
}
} else
{var temp__4092__auto___17130 = cljs.core.seq.call(null,seq__17117_17121);if(temp__4092__auto___17130)
{var seq__17117_17131__$1 = temp__4092__auto___17130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17117_17131__$1))
{var c__4148__auto___17132 = cljs.core.chunk_first.call(null,seq__17117_17131__$1);{
var G__17133 = cljs.core.chunk_rest.call(null,seq__17117_17131__$1);
var G__17134 = c__4148__auto___17132;
var G__17135 = cljs.core.count.call(null,c__4148__auto___17132);
var G__17136 = 0;
seq__17117_17121 = G__17133;
chunk__17118_17122 = G__17134;
count__17119_17123 = G__17135;
i__17120_17124 = G__17136;
continue;
}
} else
{var n_17137 = cljs.core.first.call(null,seq__17117_17131__$1);n_17137.removeAttribute(cljs.core.name.call(null,name));
{
var G__17138 = cljs.core.next.call(null,seq__17117_17131__$1);
var G__17139 = null;
var G__17140 = 0;
var G__17141 = 0;
seq__17117_17121 = G__17138;
chunk__17118_17122 = G__17139;
count__17119_17123 = G__17140;
i__17120_17124 = G__17141;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17143 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17143,0,null);var v = cljs.core.nth.call(null,vec__17143,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17144_SHARP_){var attr = attrs__$1.item(p1__17144_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17151_17157 = cljs.core.seq.call(null,styles);var chunk__17152_17158 = null;var count__17153_17159 = 0;var i__17154_17160 = 0;while(true){
if((i__17154_17160 < count__17153_17159))
{var vec__17155_17161 = cljs.core._nth.call(null,chunk__17152_17158,i__17154_17160);var name_17162 = cljs.core.nth.call(null,vec__17155_17161,0,null);var value_17163 = cljs.core.nth.call(null,vec__17155_17161,1,null);domina.set_style_BANG_.call(null,content,name_17162,value_17163);
{
var G__17164 = seq__17151_17157;
var G__17165 = chunk__17152_17158;
var G__17166 = count__17153_17159;
var G__17167 = (i__17154_17160 + 1);
seq__17151_17157 = G__17164;
chunk__17152_17158 = G__17165;
count__17153_17159 = G__17166;
i__17154_17160 = G__17167;
continue;
}
} else
{var temp__4092__auto___17168 = cljs.core.seq.call(null,seq__17151_17157);if(temp__4092__auto___17168)
{var seq__17151_17169__$1 = temp__4092__auto___17168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17151_17169__$1))
{var c__4148__auto___17170 = cljs.core.chunk_first.call(null,seq__17151_17169__$1);{
var G__17171 = cljs.core.chunk_rest.call(null,seq__17151_17169__$1);
var G__17172 = c__4148__auto___17170;
var G__17173 = cljs.core.count.call(null,c__4148__auto___17170);
var G__17174 = 0;
seq__17151_17157 = G__17171;
chunk__17152_17158 = G__17172;
count__17153_17159 = G__17173;
i__17154_17160 = G__17174;
continue;
}
} else
{var vec__17156_17175 = cljs.core.first.call(null,seq__17151_17169__$1);var name_17176 = cljs.core.nth.call(null,vec__17156_17175,0,null);var value_17177 = cljs.core.nth.call(null,vec__17156_17175,1,null);domina.set_style_BANG_.call(null,content,name_17176,value_17177);
{
var G__17178 = cljs.core.next.call(null,seq__17151_17169__$1);
var G__17179 = null;
var G__17180 = 0;
var G__17181 = 0;
seq__17151_17157 = G__17178;
chunk__17152_17158 = G__17179;
count__17153_17159 = G__17180;
i__17154_17160 = G__17181;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17188_17194 = cljs.core.seq.call(null,attrs);var chunk__17189_17195 = null;var count__17190_17196 = 0;var i__17191_17197 = 0;while(true){
if((i__17191_17197 < count__17190_17196))
{var vec__17192_17198 = cljs.core._nth.call(null,chunk__17189_17195,i__17191_17197);var name_17199 = cljs.core.nth.call(null,vec__17192_17198,0,null);var value_17200 = cljs.core.nth.call(null,vec__17192_17198,1,null);domina.set_attr_BANG_.call(null,content,name_17199,value_17200);
{
var G__17201 = seq__17188_17194;
var G__17202 = chunk__17189_17195;
var G__17203 = count__17190_17196;
var G__17204 = (i__17191_17197 + 1);
seq__17188_17194 = G__17201;
chunk__17189_17195 = G__17202;
count__17190_17196 = G__17203;
i__17191_17197 = G__17204;
continue;
}
} else
{var temp__4092__auto___17205 = cljs.core.seq.call(null,seq__17188_17194);if(temp__4092__auto___17205)
{var seq__17188_17206__$1 = temp__4092__auto___17205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17188_17206__$1))
{var c__4148__auto___17207 = cljs.core.chunk_first.call(null,seq__17188_17206__$1);{
var G__17208 = cljs.core.chunk_rest.call(null,seq__17188_17206__$1);
var G__17209 = c__4148__auto___17207;
var G__17210 = cljs.core.count.call(null,c__4148__auto___17207);
var G__17211 = 0;
seq__17188_17194 = G__17208;
chunk__17189_17195 = G__17209;
count__17190_17196 = G__17210;
i__17191_17197 = G__17211;
continue;
}
} else
{var vec__17193_17212 = cljs.core.first.call(null,seq__17188_17206__$1);var name_17213 = cljs.core.nth.call(null,vec__17193_17212,0,null);var value_17214 = cljs.core.nth.call(null,vec__17193_17212,1,null);domina.set_attr_BANG_.call(null,content,name_17213,value_17214);
{
var G__17215 = cljs.core.next.call(null,seq__17188_17206__$1);
var G__17216 = null;
var G__17217 = 0;
var G__17218 = 0;
seq__17188_17194 = G__17215;
chunk__17189_17195 = G__17216;
count__17190_17196 = G__17217;
i__17191_17197 = G__17218;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17223_17227 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17224_17228 = null;var count__17225_17229 = 0;var i__17226_17230 = 0;while(true){
if((i__17226_17230 < count__17225_17229))
{var node_17231 = cljs.core._nth.call(null,chunk__17224_17228,i__17226_17230);goog.dom.classes.add(node_17231,class$);
{
var G__17232 = seq__17223_17227;
var G__17233 = chunk__17224_17228;
var G__17234 = count__17225_17229;
var G__17235 = (i__17226_17230 + 1);
seq__17223_17227 = G__17232;
chunk__17224_17228 = G__17233;
count__17225_17229 = G__17234;
i__17226_17230 = G__17235;
continue;
}
} else
{var temp__4092__auto___17236 = cljs.core.seq.call(null,seq__17223_17227);if(temp__4092__auto___17236)
{var seq__17223_17237__$1 = temp__4092__auto___17236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17223_17237__$1))
{var c__4148__auto___17238 = cljs.core.chunk_first.call(null,seq__17223_17237__$1);{
var G__17239 = cljs.core.chunk_rest.call(null,seq__17223_17237__$1);
var G__17240 = c__4148__auto___17238;
var G__17241 = cljs.core.count.call(null,c__4148__auto___17238);
var G__17242 = 0;
seq__17223_17227 = G__17239;
chunk__17224_17228 = G__17240;
count__17225_17229 = G__17241;
i__17226_17230 = G__17242;
continue;
}
} else
{var node_17243 = cljs.core.first.call(null,seq__17223_17237__$1);goog.dom.classes.add(node_17243,class$);
{
var G__17244 = cljs.core.next.call(null,seq__17223_17237__$1);
var G__17245 = null;
var G__17246 = 0;
var G__17247 = 0;
seq__17223_17227 = G__17244;
chunk__17224_17228 = G__17245;
count__17225_17229 = G__17246;
i__17226_17230 = G__17247;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17252_17256 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17253_17257 = null;var count__17254_17258 = 0;var i__17255_17259 = 0;while(true){
if((i__17255_17259 < count__17254_17258))
{var node_17260 = cljs.core._nth.call(null,chunk__17253_17257,i__17255_17259);goog.dom.classes.remove(node_17260,class$);
{
var G__17261 = seq__17252_17256;
var G__17262 = chunk__17253_17257;
var G__17263 = count__17254_17258;
var G__17264 = (i__17255_17259 + 1);
seq__17252_17256 = G__17261;
chunk__17253_17257 = G__17262;
count__17254_17258 = G__17263;
i__17255_17259 = G__17264;
continue;
}
} else
{var temp__4092__auto___17265 = cljs.core.seq.call(null,seq__17252_17256);if(temp__4092__auto___17265)
{var seq__17252_17266__$1 = temp__4092__auto___17265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17252_17266__$1))
{var c__4148__auto___17267 = cljs.core.chunk_first.call(null,seq__17252_17266__$1);{
var G__17268 = cljs.core.chunk_rest.call(null,seq__17252_17266__$1);
var G__17269 = c__4148__auto___17267;
var G__17270 = cljs.core.count.call(null,c__4148__auto___17267);
var G__17271 = 0;
seq__17252_17256 = G__17268;
chunk__17253_17257 = G__17269;
count__17254_17258 = G__17270;
i__17255_17259 = G__17271;
continue;
}
} else
{var node_17272 = cljs.core.first.call(null,seq__17252_17266__$1);goog.dom.classes.remove(node_17272,class$);
{
var G__17273 = cljs.core.next.call(null,seq__17252_17266__$1);
var G__17274 = null;
var G__17275 = 0;
var G__17276 = 0;
seq__17252_17256 = G__17273;
chunk__17253_17257 = G__17274;
count__17254_17258 = G__17275;
i__17255_17259 = G__17276;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17281_17285 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17282_17286 = null;var count__17283_17287 = 0;var i__17284_17288 = 0;while(true){
if((i__17284_17288 < count__17283_17287))
{var node_17289 = cljs.core._nth.call(null,chunk__17282_17286,i__17284_17288);goog.dom.classes.toggle(node_17289,class$);
{
var G__17290 = seq__17281_17285;
var G__17291 = chunk__17282_17286;
var G__17292 = count__17283_17287;
var G__17293 = (i__17284_17288 + 1);
seq__17281_17285 = G__17290;
chunk__17282_17286 = G__17291;
count__17283_17287 = G__17292;
i__17284_17288 = G__17293;
continue;
}
} else
{var temp__4092__auto___17294 = cljs.core.seq.call(null,seq__17281_17285);if(temp__4092__auto___17294)
{var seq__17281_17295__$1 = temp__4092__auto___17294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17281_17295__$1))
{var c__4148__auto___17296 = cljs.core.chunk_first.call(null,seq__17281_17295__$1);{
var G__17297 = cljs.core.chunk_rest.call(null,seq__17281_17295__$1);
var G__17298 = c__4148__auto___17296;
var G__17299 = cljs.core.count.call(null,c__4148__auto___17296);
var G__17300 = 0;
seq__17281_17285 = G__17297;
chunk__17282_17286 = G__17298;
count__17283_17287 = G__17299;
i__17284_17288 = G__17300;
continue;
}
} else
{var node_17301 = cljs.core.first.call(null,seq__17281_17295__$1);goog.dom.classes.toggle(node_17301,class$);
{
var G__17302 = cljs.core.next.call(null,seq__17281_17295__$1);
var G__17303 = null;
var G__17304 = 0;
var G__17305 = 0;
seq__17281_17285 = G__17302;
chunk__17282_17286 = G__17303;
count__17283_17287 = G__17304;
i__17284_17288 = G__17305;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17314__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17310_17315 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17311_17316 = null;var count__17312_17317 = 0;var i__17313_17318 = 0;while(true){
if((i__17313_17318 < count__17312_17317))
{var node_17319 = cljs.core._nth.call(null,chunk__17311_17316,i__17313_17318);goog.dom.classes.set(node_17319,classes_17314__$1);
{
var G__17320 = seq__17310_17315;
var G__17321 = chunk__17311_17316;
var G__17322 = count__17312_17317;
var G__17323 = (i__17313_17318 + 1);
seq__17310_17315 = G__17320;
chunk__17311_17316 = G__17321;
count__17312_17317 = G__17322;
i__17313_17318 = G__17323;
continue;
}
} else
{var temp__4092__auto___17324 = cljs.core.seq.call(null,seq__17310_17315);if(temp__4092__auto___17324)
{var seq__17310_17325__$1 = temp__4092__auto___17324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17310_17325__$1))
{var c__4148__auto___17326 = cljs.core.chunk_first.call(null,seq__17310_17325__$1);{
var G__17327 = cljs.core.chunk_rest.call(null,seq__17310_17325__$1);
var G__17328 = c__4148__auto___17326;
var G__17329 = cljs.core.count.call(null,c__4148__auto___17326);
var G__17330 = 0;
seq__17310_17315 = G__17327;
chunk__17311_17316 = G__17328;
count__17312_17317 = G__17329;
i__17313_17318 = G__17330;
continue;
}
} else
{var node_17331 = cljs.core.first.call(null,seq__17310_17325__$1);goog.dom.classes.set(node_17331,classes_17314__$1);
{
var G__17332 = cljs.core.next.call(null,seq__17310_17325__$1);
var G__17333 = null;
var G__17334 = 0;
var G__17335 = 0;
seq__17310_17315 = G__17332;
chunk__17311_17316 = G__17333;
count__17312_17317 = G__17334;
i__17313_17318 = G__17335;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17340_17344 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17341_17345 = null;var count__17342_17346 = 0;var i__17343_17347 = 0;while(true){
if((i__17343_17347 < count__17342_17346))
{var node_17348 = cljs.core._nth.call(null,chunk__17341_17345,i__17343_17347);goog.dom.setTextContent(node_17348,value);
{
var G__17349 = seq__17340_17344;
var G__17350 = chunk__17341_17345;
var G__17351 = count__17342_17346;
var G__17352 = (i__17343_17347 + 1);
seq__17340_17344 = G__17349;
chunk__17341_17345 = G__17350;
count__17342_17346 = G__17351;
i__17343_17347 = G__17352;
continue;
}
} else
{var temp__4092__auto___17353 = cljs.core.seq.call(null,seq__17340_17344);if(temp__4092__auto___17353)
{var seq__17340_17354__$1 = temp__4092__auto___17353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17340_17354__$1))
{var c__4148__auto___17355 = cljs.core.chunk_first.call(null,seq__17340_17354__$1);{
var G__17356 = cljs.core.chunk_rest.call(null,seq__17340_17354__$1);
var G__17357 = c__4148__auto___17355;
var G__17358 = cljs.core.count.call(null,c__4148__auto___17355);
var G__17359 = 0;
seq__17340_17344 = G__17356;
chunk__17341_17345 = G__17357;
count__17342_17346 = G__17358;
i__17343_17347 = G__17359;
continue;
}
} else
{var node_17360 = cljs.core.first.call(null,seq__17340_17354__$1);goog.dom.setTextContent(node_17360,value);
{
var G__17361 = cljs.core.next.call(null,seq__17340_17354__$1);
var G__17362 = null;
var G__17363 = 0;
var G__17364 = 0;
seq__17340_17344 = G__17361;
chunk__17341_17345 = G__17362;
count__17342_17346 = G__17363;
i__17343_17347 = G__17364;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17369_17373 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17370_17374 = null;var count__17371_17375 = 0;var i__17372_17376 = 0;while(true){
if((i__17372_17376 < count__17371_17375))
{var node_17377 = cljs.core._nth.call(null,chunk__17370_17374,i__17372_17376);goog.dom.forms.setValue(node_17377,value);
{
var G__17378 = seq__17369_17373;
var G__17379 = chunk__17370_17374;
var G__17380 = count__17371_17375;
var G__17381 = (i__17372_17376 + 1);
seq__17369_17373 = G__17378;
chunk__17370_17374 = G__17379;
count__17371_17375 = G__17380;
i__17372_17376 = G__17381;
continue;
}
} else
{var temp__4092__auto___17382 = cljs.core.seq.call(null,seq__17369_17373);if(temp__4092__auto___17382)
{var seq__17369_17383__$1 = temp__4092__auto___17382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17369_17383__$1))
{var c__4148__auto___17384 = cljs.core.chunk_first.call(null,seq__17369_17383__$1);{
var G__17385 = cljs.core.chunk_rest.call(null,seq__17369_17383__$1);
var G__17386 = c__4148__auto___17384;
var G__17387 = cljs.core.count.call(null,c__4148__auto___17384);
var G__17388 = 0;
seq__17369_17373 = G__17385;
chunk__17370_17374 = G__17386;
count__17371_17375 = G__17387;
i__17372_17376 = G__17388;
continue;
}
} else
{var node_17389 = cljs.core.first.call(null,seq__17369_17383__$1);goog.dom.forms.setValue(node_17389,value);
{
var G__17390 = cljs.core.next.call(null,seq__17369_17383__$1);
var G__17391 = null;
var G__17392 = 0;
var G__17393 = 0;
seq__17369_17373 = G__17390;
chunk__17370_17374 = G__17391;
count__17371_17375 = G__17392;
i__17372_17376 = G__17393;
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
{var value_17404 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17400_17405 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17401_17406 = null;var count__17402_17407 = 0;var i__17403_17408 = 0;while(true){
if((i__17403_17408 < count__17402_17407))
{var node_17409 = cljs.core._nth.call(null,chunk__17401_17406,i__17403_17408);node_17409.innerHTML = value_17404;
{
var G__17410 = seq__17400_17405;
var G__17411 = chunk__17401_17406;
var G__17412 = count__17402_17407;
var G__17413 = (i__17403_17408 + 1);
seq__17400_17405 = G__17410;
chunk__17401_17406 = G__17411;
count__17402_17407 = G__17412;
i__17403_17408 = G__17413;
continue;
}
} else
{var temp__4092__auto___17414 = cljs.core.seq.call(null,seq__17400_17405);if(temp__4092__auto___17414)
{var seq__17400_17415__$1 = temp__4092__auto___17414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17400_17415__$1))
{var c__4148__auto___17416 = cljs.core.chunk_first.call(null,seq__17400_17415__$1);{
var G__17417 = cljs.core.chunk_rest.call(null,seq__17400_17415__$1);
var G__17418 = c__4148__auto___17416;
var G__17419 = cljs.core.count.call(null,c__4148__auto___17416);
var G__17420 = 0;
seq__17400_17405 = G__17417;
chunk__17401_17406 = G__17418;
count__17402_17407 = G__17419;
i__17403_17408 = G__17420;
continue;
}
} else
{var node_17421 = cljs.core.first.call(null,seq__17400_17415__$1);node_17421.innerHTML = value_17404;
{
var G__17422 = cljs.core.next.call(null,seq__17400_17415__$1);
var G__17423 = null;
var G__17424 = 0;
var G__17425 = 0;
seq__17400_17405 = G__17422;
chunk__17401_17406 = G__17423;
count__17402_17407 = G__17424;
i__17403_17408 = G__17425;
continue;
}
}
} else
{}
}
break;
}
}catch (e17399){if((e17399 instanceof Error))
{var e_17426 = e17399;domina.replace_children_BANG_.call(null,content,value_17404);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17399;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17433_17437 = cljs.core.seq.call(null,children);var chunk__17434_17438 = null;var count__17435_17439 = 0;var i__17436_17440 = 0;while(true){
if((i__17436_17440 < count__17435_17439))
{var child_17441 = cljs.core._nth.call(null,chunk__17434_17438,i__17436_17440);frag.appendChild(child_17441);
{
var G__17442 = seq__17433_17437;
var G__17443 = chunk__17434_17438;
var G__17444 = count__17435_17439;
var G__17445 = (i__17436_17440 + 1);
seq__17433_17437 = G__17442;
chunk__17434_17438 = G__17443;
count__17435_17439 = G__17444;
i__17436_17440 = G__17445;
continue;
}
} else
{var temp__4092__auto___17446 = cljs.core.seq.call(null,seq__17433_17437);if(temp__4092__auto___17446)
{var seq__17433_17447__$1 = temp__4092__auto___17446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17433_17447__$1))
{var c__4148__auto___17448 = cljs.core.chunk_first.call(null,seq__17433_17447__$1);{
var G__17449 = cljs.core.chunk_rest.call(null,seq__17433_17447__$1);
var G__17450 = c__4148__auto___17448;
var G__17451 = cljs.core.count.call(null,c__4148__auto___17448);
var G__17452 = 0;
seq__17433_17437 = G__17449;
chunk__17434_17438 = G__17450;
count__17435_17439 = G__17451;
i__17436_17440 = G__17452;
continue;
}
} else
{var child_17453 = cljs.core.first.call(null,seq__17433_17447__$1);frag.appendChild(child_17453);
{
var G__17454 = cljs.core.next.call(null,seq__17433_17447__$1);
var G__17455 = null;
var G__17456 = 0;
var G__17457 = 0;
seq__17433_17437 = G__17454;
chunk__17434_17438 = G__17455;
count__17435_17439 = G__17456;
i__17436_17440 = G__17457;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17427_SHARP_,p2__17428_SHARP_){return f.call(null,p1__17427_SHARP_,p2__17428_SHARP_);
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
{if((function (){var G__17459 = list_thing;if(G__17459)
{var bit__4050__auto__ = (G__17459.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17459.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17459.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17459);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17459);
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
{if((function (){var G__17460 = content;if(G__17460)
{var bit__4050__auto__ = (G__17460.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17460.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17460.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17460);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17460);
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
{if((function (){var G__17461 = content;if(G__17461)
{var bit__4050__auto__ = (G__17461.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17461.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17461.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17461);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17461);
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

//# sourceMappingURL=domina.js.map