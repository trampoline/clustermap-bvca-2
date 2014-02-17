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
var opt_wrapper_17014 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17015 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17016 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17015,table_section_wrapper_17015,opt_wrapper_17014,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17016,table_section_wrapper_17015,cell_wrapper_17016,opt_wrapper_17014,table_section_wrapper_17015,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17015]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17021 = cljs.core.seq.call(null,tbody);var chunk__17022 = null;var count__17023 = 0;var i__17024 = 0;while(true){
if((i__17024 < count__17023))
{var child = cljs.core._nth.call(null,chunk__17022,i__17024);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17025 = seq__17021;
var G__17026 = chunk__17022;
var G__17027 = count__17023;
var G__17028 = (i__17024 + 1);
seq__17021 = G__17025;
chunk__17022 = G__17026;
count__17023 = G__17027;
i__17024 = G__17028;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17021);if(temp__4092__auto__)
{var seq__17021__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17021__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17021__$1);{
var G__17029 = cljs.core.chunk_rest.call(null,seq__17021__$1);
var G__17030 = c__4148__auto__;
var G__17031 = cljs.core.count.call(null,c__4148__auto__);
var G__17032 = 0;
seq__17021 = G__17029;
chunk__17022 = G__17030;
count__17023 = G__17031;
i__17024 = G__17032;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17021__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17033 = cljs.core.next.call(null,seq__17021__$1);
var G__17034 = null;
var G__17035 = 0;
var G__17036 = 0;
seq__17021 = G__17033;
chunk__17022 = G__17034;
count__17023 = G__17035;
i__17024 = G__17036;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17038 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17038,0,null);var start_wrap = cljs.core.nth.call(null,vec__17038,1,null);var end_wrap = cljs.core.nth.call(null,vec__17038,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17039 = wrapper.lastChild;
var G__17040 = (level - 1);
wrapper = G__17039;
level = G__17040;
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
domina.DomContent = (function (){var obj17042 = {};return obj17042;
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
log_debug.cljs$lang$applyTo = (function (arglist__17043){
var mesg = cljs.core.seq(arglist__17043);
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
log.cljs$lang$applyTo = (function (arglist__17044){
var mesg = cljs.core.seq(arglist__17044);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17045){
var contents = cljs.core.seq(arglist__17045);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17046_SHARP_){return p1__17046_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17047_SHARP_,p2__17048_SHARP_){return goog.dom.insertChildAt(p1__17047_SHARP_,p2__17048_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17050_SHARP_,p2__17049_SHARP_){return goog.dom.insertSiblingBefore(p2__17049_SHARP_,p1__17050_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17052_SHARP_,p2__17051_SHARP_){return goog.dom.insertSiblingAfter(p2__17051_SHARP_,p1__17052_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17054_SHARP_,p2__17053_SHARP_){return goog.dom.replaceNode(p2__17053_SHARP_,p1__17054_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17059_17063 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17060_17064 = null;var count__17061_17065 = 0;var i__17062_17066 = 0;while(true){
if((i__17062_17066 < count__17061_17065))
{var n_17067 = cljs.core._nth.call(null,chunk__17060_17064,i__17062_17066);goog.style.setStyle(n_17067,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17068 = seq__17059_17063;
var G__17069 = chunk__17060_17064;
var G__17070 = count__17061_17065;
var G__17071 = (i__17062_17066 + 1);
seq__17059_17063 = G__17068;
chunk__17060_17064 = G__17069;
count__17061_17065 = G__17070;
i__17062_17066 = G__17071;
continue;
}
} else
{var temp__4092__auto___17072 = cljs.core.seq.call(null,seq__17059_17063);if(temp__4092__auto___17072)
{var seq__17059_17073__$1 = temp__4092__auto___17072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17059_17073__$1))
{var c__4148__auto___17074 = cljs.core.chunk_first.call(null,seq__17059_17073__$1);{
var G__17075 = cljs.core.chunk_rest.call(null,seq__17059_17073__$1);
var G__17076 = c__4148__auto___17074;
var G__17077 = cljs.core.count.call(null,c__4148__auto___17074);
var G__17078 = 0;
seq__17059_17063 = G__17075;
chunk__17060_17064 = G__17076;
count__17061_17065 = G__17077;
i__17062_17066 = G__17078;
continue;
}
} else
{var n_17079 = cljs.core.first.call(null,seq__17059_17073__$1);goog.style.setStyle(n_17079,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17080 = cljs.core.next.call(null,seq__17059_17073__$1);
var G__17081 = null;
var G__17082 = 0;
var G__17083 = 0;
seq__17059_17063 = G__17080;
chunk__17060_17064 = G__17081;
count__17061_17065 = G__17082;
i__17062_17066 = G__17083;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17084){
var content = cljs.core.first(arglist__17084);
arglist__17084 = cljs.core.next(arglist__17084);
var name = cljs.core.first(arglist__17084);
var value = cljs.core.rest(arglist__17084);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17089_17093 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17090_17094 = null;var count__17091_17095 = 0;var i__17092_17096 = 0;while(true){
if((i__17092_17096 < count__17091_17095))
{var n_17097 = cljs.core._nth.call(null,chunk__17090_17094,i__17092_17096);n_17097.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17098 = seq__17089_17093;
var G__17099 = chunk__17090_17094;
var G__17100 = count__17091_17095;
var G__17101 = (i__17092_17096 + 1);
seq__17089_17093 = G__17098;
chunk__17090_17094 = G__17099;
count__17091_17095 = G__17100;
i__17092_17096 = G__17101;
continue;
}
} else
{var temp__4092__auto___17102 = cljs.core.seq.call(null,seq__17089_17093);if(temp__4092__auto___17102)
{var seq__17089_17103__$1 = temp__4092__auto___17102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17089_17103__$1))
{var c__4148__auto___17104 = cljs.core.chunk_first.call(null,seq__17089_17103__$1);{
var G__17105 = cljs.core.chunk_rest.call(null,seq__17089_17103__$1);
var G__17106 = c__4148__auto___17104;
var G__17107 = cljs.core.count.call(null,c__4148__auto___17104);
var G__17108 = 0;
seq__17089_17093 = G__17105;
chunk__17090_17094 = G__17106;
count__17091_17095 = G__17107;
i__17092_17096 = G__17108;
continue;
}
} else
{var n_17109 = cljs.core.first.call(null,seq__17089_17103__$1);n_17109.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17110 = cljs.core.next.call(null,seq__17089_17103__$1);
var G__17111 = null;
var G__17112 = 0;
var G__17113 = 0;
seq__17089_17093 = G__17110;
chunk__17090_17094 = G__17111;
count__17091_17095 = G__17112;
i__17092_17096 = G__17113;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17114){
var content = cljs.core.first(arglist__17114);
arglist__17114 = cljs.core.next(arglist__17114);
var name = cljs.core.first(arglist__17114);
var value = cljs.core.rest(arglist__17114);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17119_17123 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17120_17124 = null;var count__17121_17125 = 0;var i__17122_17126 = 0;while(true){
if((i__17122_17126 < count__17121_17125))
{var n_17127 = cljs.core._nth.call(null,chunk__17120_17124,i__17122_17126);n_17127.removeAttribute(cljs.core.name.call(null,name));
{
var G__17128 = seq__17119_17123;
var G__17129 = chunk__17120_17124;
var G__17130 = count__17121_17125;
var G__17131 = (i__17122_17126 + 1);
seq__17119_17123 = G__17128;
chunk__17120_17124 = G__17129;
count__17121_17125 = G__17130;
i__17122_17126 = G__17131;
continue;
}
} else
{var temp__4092__auto___17132 = cljs.core.seq.call(null,seq__17119_17123);if(temp__4092__auto___17132)
{var seq__17119_17133__$1 = temp__4092__auto___17132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17119_17133__$1))
{var c__4148__auto___17134 = cljs.core.chunk_first.call(null,seq__17119_17133__$1);{
var G__17135 = cljs.core.chunk_rest.call(null,seq__17119_17133__$1);
var G__17136 = c__4148__auto___17134;
var G__17137 = cljs.core.count.call(null,c__4148__auto___17134);
var G__17138 = 0;
seq__17119_17123 = G__17135;
chunk__17120_17124 = G__17136;
count__17121_17125 = G__17137;
i__17122_17126 = G__17138;
continue;
}
} else
{var n_17139 = cljs.core.first.call(null,seq__17119_17133__$1);n_17139.removeAttribute(cljs.core.name.call(null,name));
{
var G__17140 = cljs.core.next.call(null,seq__17119_17133__$1);
var G__17141 = null;
var G__17142 = 0;
var G__17143 = 0;
seq__17119_17123 = G__17140;
chunk__17120_17124 = G__17141;
count__17121_17125 = G__17142;
i__17122_17126 = G__17143;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17145 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17145,0,null);var v = cljs.core.nth.call(null,vec__17145,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17146_SHARP_){var attr = attrs__$1.item(p1__17146_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17153_17159 = cljs.core.seq.call(null,styles);var chunk__17154_17160 = null;var count__17155_17161 = 0;var i__17156_17162 = 0;while(true){
if((i__17156_17162 < count__17155_17161))
{var vec__17157_17163 = cljs.core._nth.call(null,chunk__17154_17160,i__17156_17162);var name_17164 = cljs.core.nth.call(null,vec__17157_17163,0,null);var value_17165 = cljs.core.nth.call(null,vec__17157_17163,1,null);domina.set_style_BANG_.call(null,content,name_17164,value_17165);
{
var G__17166 = seq__17153_17159;
var G__17167 = chunk__17154_17160;
var G__17168 = count__17155_17161;
var G__17169 = (i__17156_17162 + 1);
seq__17153_17159 = G__17166;
chunk__17154_17160 = G__17167;
count__17155_17161 = G__17168;
i__17156_17162 = G__17169;
continue;
}
} else
{var temp__4092__auto___17170 = cljs.core.seq.call(null,seq__17153_17159);if(temp__4092__auto___17170)
{var seq__17153_17171__$1 = temp__4092__auto___17170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17153_17171__$1))
{var c__4148__auto___17172 = cljs.core.chunk_first.call(null,seq__17153_17171__$1);{
var G__17173 = cljs.core.chunk_rest.call(null,seq__17153_17171__$1);
var G__17174 = c__4148__auto___17172;
var G__17175 = cljs.core.count.call(null,c__4148__auto___17172);
var G__17176 = 0;
seq__17153_17159 = G__17173;
chunk__17154_17160 = G__17174;
count__17155_17161 = G__17175;
i__17156_17162 = G__17176;
continue;
}
} else
{var vec__17158_17177 = cljs.core.first.call(null,seq__17153_17171__$1);var name_17178 = cljs.core.nth.call(null,vec__17158_17177,0,null);var value_17179 = cljs.core.nth.call(null,vec__17158_17177,1,null);domina.set_style_BANG_.call(null,content,name_17178,value_17179);
{
var G__17180 = cljs.core.next.call(null,seq__17153_17171__$1);
var G__17181 = null;
var G__17182 = 0;
var G__17183 = 0;
seq__17153_17159 = G__17180;
chunk__17154_17160 = G__17181;
count__17155_17161 = G__17182;
i__17156_17162 = G__17183;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17190_17196 = cljs.core.seq.call(null,attrs);var chunk__17191_17197 = null;var count__17192_17198 = 0;var i__17193_17199 = 0;while(true){
if((i__17193_17199 < count__17192_17198))
{var vec__17194_17200 = cljs.core._nth.call(null,chunk__17191_17197,i__17193_17199);var name_17201 = cljs.core.nth.call(null,vec__17194_17200,0,null);var value_17202 = cljs.core.nth.call(null,vec__17194_17200,1,null);domina.set_attr_BANG_.call(null,content,name_17201,value_17202);
{
var G__17203 = seq__17190_17196;
var G__17204 = chunk__17191_17197;
var G__17205 = count__17192_17198;
var G__17206 = (i__17193_17199 + 1);
seq__17190_17196 = G__17203;
chunk__17191_17197 = G__17204;
count__17192_17198 = G__17205;
i__17193_17199 = G__17206;
continue;
}
} else
{var temp__4092__auto___17207 = cljs.core.seq.call(null,seq__17190_17196);if(temp__4092__auto___17207)
{var seq__17190_17208__$1 = temp__4092__auto___17207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17190_17208__$1))
{var c__4148__auto___17209 = cljs.core.chunk_first.call(null,seq__17190_17208__$1);{
var G__17210 = cljs.core.chunk_rest.call(null,seq__17190_17208__$1);
var G__17211 = c__4148__auto___17209;
var G__17212 = cljs.core.count.call(null,c__4148__auto___17209);
var G__17213 = 0;
seq__17190_17196 = G__17210;
chunk__17191_17197 = G__17211;
count__17192_17198 = G__17212;
i__17193_17199 = G__17213;
continue;
}
} else
{var vec__17195_17214 = cljs.core.first.call(null,seq__17190_17208__$1);var name_17215 = cljs.core.nth.call(null,vec__17195_17214,0,null);var value_17216 = cljs.core.nth.call(null,vec__17195_17214,1,null);domina.set_attr_BANG_.call(null,content,name_17215,value_17216);
{
var G__17217 = cljs.core.next.call(null,seq__17190_17208__$1);
var G__17218 = null;
var G__17219 = 0;
var G__17220 = 0;
seq__17190_17196 = G__17217;
chunk__17191_17197 = G__17218;
count__17192_17198 = G__17219;
i__17193_17199 = G__17220;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17225_17229 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17226_17230 = null;var count__17227_17231 = 0;var i__17228_17232 = 0;while(true){
if((i__17228_17232 < count__17227_17231))
{var node_17233 = cljs.core._nth.call(null,chunk__17226_17230,i__17228_17232);goog.dom.classes.add(node_17233,class$);
{
var G__17234 = seq__17225_17229;
var G__17235 = chunk__17226_17230;
var G__17236 = count__17227_17231;
var G__17237 = (i__17228_17232 + 1);
seq__17225_17229 = G__17234;
chunk__17226_17230 = G__17235;
count__17227_17231 = G__17236;
i__17228_17232 = G__17237;
continue;
}
} else
{var temp__4092__auto___17238 = cljs.core.seq.call(null,seq__17225_17229);if(temp__4092__auto___17238)
{var seq__17225_17239__$1 = temp__4092__auto___17238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17225_17239__$1))
{var c__4148__auto___17240 = cljs.core.chunk_first.call(null,seq__17225_17239__$1);{
var G__17241 = cljs.core.chunk_rest.call(null,seq__17225_17239__$1);
var G__17242 = c__4148__auto___17240;
var G__17243 = cljs.core.count.call(null,c__4148__auto___17240);
var G__17244 = 0;
seq__17225_17229 = G__17241;
chunk__17226_17230 = G__17242;
count__17227_17231 = G__17243;
i__17228_17232 = G__17244;
continue;
}
} else
{var node_17245 = cljs.core.first.call(null,seq__17225_17239__$1);goog.dom.classes.add(node_17245,class$);
{
var G__17246 = cljs.core.next.call(null,seq__17225_17239__$1);
var G__17247 = null;
var G__17248 = 0;
var G__17249 = 0;
seq__17225_17229 = G__17246;
chunk__17226_17230 = G__17247;
count__17227_17231 = G__17248;
i__17228_17232 = G__17249;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17254_17258 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17255_17259 = null;var count__17256_17260 = 0;var i__17257_17261 = 0;while(true){
if((i__17257_17261 < count__17256_17260))
{var node_17262 = cljs.core._nth.call(null,chunk__17255_17259,i__17257_17261);goog.dom.classes.remove(node_17262,class$);
{
var G__17263 = seq__17254_17258;
var G__17264 = chunk__17255_17259;
var G__17265 = count__17256_17260;
var G__17266 = (i__17257_17261 + 1);
seq__17254_17258 = G__17263;
chunk__17255_17259 = G__17264;
count__17256_17260 = G__17265;
i__17257_17261 = G__17266;
continue;
}
} else
{var temp__4092__auto___17267 = cljs.core.seq.call(null,seq__17254_17258);if(temp__4092__auto___17267)
{var seq__17254_17268__$1 = temp__4092__auto___17267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17254_17268__$1))
{var c__4148__auto___17269 = cljs.core.chunk_first.call(null,seq__17254_17268__$1);{
var G__17270 = cljs.core.chunk_rest.call(null,seq__17254_17268__$1);
var G__17271 = c__4148__auto___17269;
var G__17272 = cljs.core.count.call(null,c__4148__auto___17269);
var G__17273 = 0;
seq__17254_17258 = G__17270;
chunk__17255_17259 = G__17271;
count__17256_17260 = G__17272;
i__17257_17261 = G__17273;
continue;
}
} else
{var node_17274 = cljs.core.first.call(null,seq__17254_17268__$1);goog.dom.classes.remove(node_17274,class$);
{
var G__17275 = cljs.core.next.call(null,seq__17254_17268__$1);
var G__17276 = null;
var G__17277 = 0;
var G__17278 = 0;
seq__17254_17258 = G__17275;
chunk__17255_17259 = G__17276;
count__17256_17260 = G__17277;
i__17257_17261 = G__17278;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17283_17287 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17284_17288 = null;var count__17285_17289 = 0;var i__17286_17290 = 0;while(true){
if((i__17286_17290 < count__17285_17289))
{var node_17291 = cljs.core._nth.call(null,chunk__17284_17288,i__17286_17290);goog.dom.classes.toggle(node_17291,class$);
{
var G__17292 = seq__17283_17287;
var G__17293 = chunk__17284_17288;
var G__17294 = count__17285_17289;
var G__17295 = (i__17286_17290 + 1);
seq__17283_17287 = G__17292;
chunk__17284_17288 = G__17293;
count__17285_17289 = G__17294;
i__17286_17290 = G__17295;
continue;
}
} else
{var temp__4092__auto___17296 = cljs.core.seq.call(null,seq__17283_17287);if(temp__4092__auto___17296)
{var seq__17283_17297__$1 = temp__4092__auto___17296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17283_17297__$1))
{var c__4148__auto___17298 = cljs.core.chunk_first.call(null,seq__17283_17297__$1);{
var G__17299 = cljs.core.chunk_rest.call(null,seq__17283_17297__$1);
var G__17300 = c__4148__auto___17298;
var G__17301 = cljs.core.count.call(null,c__4148__auto___17298);
var G__17302 = 0;
seq__17283_17287 = G__17299;
chunk__17284_17288 = G__17300;
count__17285_17289 = G__17301;
i__17286_17290 = G__17302;
continue;
}
} else
{var node_17303 = cljs.core.first.call(null,seq__17283_17297__$1);goog.dom.classes.toggle(node_17303,class$);
{
var G__17304 = cljs.core.next.call(null,seq__17283_17297__$1);
var G__17305 = null;
var G__17306 = 0;
var G__17307 = 0;
seq__17283_17287 = G__17304;
chunk__17284_17288 = G__17305;
count__17285_17289 = G__17306;
i__17286_17290 = G__17307;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17316__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17312_17317 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17313_17318 = null;var count__17314_17319 = 0;var i__17315_17320 = 0;while(true){
if((i__17315_17320 < count__17314_17319))
{var node_17321 = cljs.core._nth.call(null,chunk__17313_17318,i__17315_17320);goog.dom.classes.set(node_17321,classes_17316__$1);
{
var G__17322 = seq__17312_17317;
var G__17323 = chunk__17313_17318;
var G__17324 = count__17314_17319;
var G__17325 = (i__17315_17320 + 1);
seq__17312_17317 = G__17322;
chunk__17313_17318 = G__17323;
count__17314_17319 = G__17324;
i__17315_17320 = G__17325;
continue;
}
} else
{var temp__4092__auto___17326 = cljs.core.seq.call(null,seq__17312_17317);if(temp__4092__auto___17326)
{var seq__17312_17327__$1 = temp__4092__auto___17326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17312_17327__$1))
{var c__4148__auto___17328 = cljs.core.chunk_first.call(null,seq__17312_17327__$1);{
var G__17329 = cljs.core.chunk_rest.call(null,seq__17312_17327__$1);
var G__17330 = c__4148__auto___17328;
var G__17331 = cljs.core.count.call(null,c__4148__auto___17328);
var G__17332 = 0;
seq__17312_17317 = G__17329;
chunk__17313_17318 = G__17330;
count__17314_17319 = G__17331;
i__17315_17320 = G__17332;
continue;
}
} else
{var node_17333 = cljs.core.first.call(null,seq__17312_17327__$1);goog.dom.classes.set(node_17333,classes_17316__$1);
{
var G__17334 = cljs.core.next.call(null,seq__17312_17327__$1);
var G__17335 = null;
var G__17336 = 0;
var G__17337 = 0;
seq__17312_17317 = G__17334;
chunk__17313_17318 = G__17335;
count__17314_17319 = G__17336;
i__17315_17320 = G__17337;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17342_17346 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17343_17347 = null;var count__17344_17348 = 0;var i__17345_17349 = 0;while(true){
if((i__17345_17349 < count__17344_17348))
{var node_17350 = cljs.core._nth.call(null,chunk__17343_17347,i__17345_17349);goog.dom.setTextContent(node_17350,value);
{
var G__17351 = seq__17342_17346;
var G__17352 = chunk__17343_17347;
var G__17353 = count__17344_17348;
var G__17354 = (i__17345_17349 + 1);
seq__17342_17346 = G__17351;
chunk__17343_17347 = G__17352;
count__17344_17348 = G__17353;
i__17345_17349 = G__17354;
continue;
}
} else
{var temp__4092__auto___17355 = cljs.core.seq.call(null,seq__17342_17346);if(temp__4092__auto___17355)
{var seq__17342_17356__$1 = temp__4092__auto___17355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17342_17356__$1))
{var c__4148__auto___17357 = cljs.core.chunk_first.call(null,seq__17342_17356__$1);{
var G__17358 = cljs.core.chunk_rest.call(null,seq__17342_17356__$1);
var G__17359 = c__4148__auto___17357;
var G__17360 = cljs.core.count.call(null,c__4148__auto___17357);
var G__17361 = 0;
seq__17342_17346 = G__17358;
chunk__17343_17347 = G__17359;
count__17344_17348 = G__17360;
i__17345_17349 = G__17361;
continue;
}
} else
{var node_17362 = cljs.core.first.call(null,seq__17342_17356__$1);goog.dom.setTextContent(node_17362,value);
{
var G__17363 = cljs.core.next.call(null,seq__17342_17356__$1);
var G__17364 = null;
var G__17365 = 0;
var G__17366 = 0;
seq__17342_17346 = G__17363;
chunk__17343_17347 = G__17364;
count__17344_17348 = G__17365;
i__17345_17349 = G__17366;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17371_17375 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17372_17376 = null;var count__17373_17377 = 0;var i__17374_17378 = 0;while(true){
if((i__17374_17378 < count__17373_17377))
{var node_17379 = cljs.core._nth.call(null,chunk__17372_17376,i__17374_17378);goog.dom.forms.setValue(node_17379,value);
{
var G__17380 = seq__17371_17375;
var G__17381 = chunk__17372_17376;
var G__17382 = count__17373_17377;
var G__17383 = (i__17374_17378 + 1);
seq__17371_17375 = G__17380;
chunk__17372_17376 = G__17381;
count__17373_17377 = G__17382;
i__17374_17378 = G__17383;
continue;
}
} else
{var temp__4092__auto___17384 = cljs.core.seq.call(null,seq__17371_17375);if(temp__4092__auto___17384)
{var seq__17371_17385__$1 = temp__4092__auto___17384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17371_17385__$1))
{var c__4148__auto___17386 = cljs.core.chunk_first.call(null,seq__17371_17385__$1);{
var G__17387 = cljs.core.chunk_rest.call(null,seq__17371_17385__$1);
var G__17388 = c__4148__auto___17386;
var G__17389 = cljs.core.count.call(null,c__4148__auto___17386);
var G__17390 = 0;
seq__17371_17375 = G__17387;
chunk__17372_17376 = G__17388;
count__17373_17377 = G__17389;
i__17374_17378 = G__17390;
continue;
}
} else
{var node_17391 = cljs.core.first.call(null,seq__17371_17385__$1);goog.dom.forms.setValue(node_17391,value);
{
var G__17392 = cljs.core.next.call(null,seq__17371_17385__$1);
var G__17393 = null;
var G__17394 = 0;
var G__17395 = 0;
seq__17371_17375 = G__17392;
chunk__17372_17376 = G__17393;
count__17373_17377 = G__17394;
i__17374_17378 = G__17395;
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
{var value_17406 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17402_17407 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17403_17408 = null;var count__17404_17409 = 0;var i__17405_17410 = 0;while(true){
if((i__17405_17410 < count__17404_17409))
{var node_17411 = cljs.core._nth.call(null,chunk__17403_17408,i__17405_17410);node_17411.innerHTML = value_17406;
{
var G__17412 = seq__17402_17407;
var G__17413 = chunk__17403_17408;
var G__17414 = count__17404_17409;
var G__17415 = (i__17405_17410 + 1);
seq__17402_17407 = G__17412;
chunk__17403_17408 = G__17413;
count__17404_17409 = G__17414;
i__17405_17410 = G__17415;
continue;
}
} else
{var temp__4092__auto___17416 = cljs.core.seq.call(null,seq__17402_17407);if(temp__4092__auto___17416)
{var seq__17402_17417__$1 = temp__4092__auto___17416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17402_17417__$1))
{var c__4148__auto___17418 = cljs.core.chunk_first.call(null,seq__17402_17417__$1);{
var G__17419 = cljs.core.chunk_rest.call(null,seq__17402_17417__$1);
var G__17420 = c__4148__auto___17418;
var G__17421 = cljs.core.count.call(null,c__4148__auto___17418);
var G__17422 = 0;
seq__17402_17407 = G__17419;
chunk__17403_17408 = G__17420;
count__17404_17409 = G__17421;
i__17405_17410 = G__17422;
continue;
}
} else
{var node_17423 = cljs.core.first.call(null,seq__17402_17417__$1);node_17423.innerHTML = value_17406;
{
var G__17424 = cljs.core.next.call(null,seq__17402_17417__$1);
var G__17425 = null;
var G__17426 = 0;
var G__17427 = 0;
seq__17402_17407 = G__17424;
chunk__17403_17408 = G__17425;
count__17404_17409 = G__17426;
i__17405_17410 = G__17427;
continue;
}
}
} else
{}
}
break;
}
}catch (e17401){if((e17401 instanceof Error))
{var e_17428 = e17401;domina.replace_children_BANG_.call(null,content,value_17406);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17401;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17435_17439 = cljs.core.seq.call(null,children);var chunk__17436_17440 = null;var count__17437_17441 = 0;var i__17438_17442 = 0;while(true){
if((i__17438_17442 < count__17437_17441))
{var child_17443 = cljs.core._nth.call(null,chunk__17436_17440,i__17438_17442);frag.appendChild(child_17443);
{
var G__17444 = seq__17435_17439;
var G__17445 = chunk__17436_17440;
var G__17446 = count__17437_17441;
var G__17447 = (i__17438_17442 + 1);
seq__17435_17439 = G__17444;
chunk__17436_17440 = G__17445;
count__17437_17441 = G__17446;
i__17438_17442 = G__17447;
continue;
}
} else
{var temp__4092__auto___17448 = cljs.core.seq.call(null,seq__17435_17439);if(temp__4092__auto___17448)
{var seq__17435_17449__$1 = temp__4092__auto___17448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17435_17449__$1))
{var c__4148__auto___17450 = cljs.core.chunk_first.call(null,seq__17435_17449__$1);{
var G__17451 = cljs.core.chunk_rest.call(null,seq__17435_17449__$1);
var G__17452 = c__4148__auto___17450;
var G__17453 = cljs.core.count.call(null,c__4148__auto___17450);
var G__17454 = 0;
seq__17435_17439 = G__17451;
chunk__17436_17440 = G__17452;
count__17437_17441 = G__17453;
i__17438_17442 = G__17454;
continue;
}
} else
{var child_17455 = cljs.core.first.call(null,seq__17435_17449__$1);frag.appendChild(child_17455);
{
var G__17456 = cljs.core.next.call(null,seq__17435_17449__$1);
var G__17457 = null;
var G__17458 = 0;
var G__17459 = 0;
seq__17435_17439 = G__17456;
chunk__17436_17440 = G__17457;
count__17437_17441 = G__17458;
i__17438_17442 = G__17459;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17429_SHARP_,p2__17430_SHARP_){return f.call(null,p1__17429_SHARP_,p2__17430_SHARP_);
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
{if((function (){var G__17461 = list_thing;if(G__17461)
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
{if((function (){var G__17462 = content;if(G__17462)
{var bit__4050__auto__ = (G__17462.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17462.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17462.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17462);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17462);
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
{if((function (){var G__17463 = content;if(G__17463)
{var bit__4050__auto__ = (G__17463.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17463.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17463.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17463);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17463);
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