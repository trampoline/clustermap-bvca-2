// Compiled by ClojureScript 0.0-2356
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
var opt_wrapper_25020 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_25021 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_25022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_25022,opt_wrapper_25020,table_section_wrapper_25021,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_25020,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_25021,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_25021,cell_wrapper_25022,table_section_wrapper_25021,table_section_wrapper_25021]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__25027 = cljs.core.seq.call(null,tbody);var chunk__25028 = null;var count__25029 = (0);var i__25030 = (0);while(true){
if((i__25030 < count__25029))
{var child = cljs.core._nth.call(null,chunk__25028,i__25030);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25031 = seq__25027;
var G__25032 = chunk__25028;
var G__25033 = count__25029;
var G__25034 = (i__25030 + (1));
seq__25027 = G__25031;
chunk__25028 = G__25032;
count__25029 = G__25033;
i__25030 = G__25034;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25027);if(temp__4126__auto__)
{var seq__25027__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25027__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__25027__$1);{
var G__25035 = cljs.core.chunk_rest.call(null,seq__25027__$1);
var G__25036 = c__4406__auto__;
var G__25037 = cljs.core.count.call(null,c__4406__auto__);
var G__25038 = (0);
seq__25027 = G__25035;
chunk__25028 = G__25036;
count__25029 = G__25037;
i__25030 = G__25038;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__25027__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25039 = cljs.core.next.call(null,seq__25027__$1);
var G__25040 = null;
var G__25041 = (0);
var G__25042 = (0);
seq__25027 = G__25039;
chunk__25028 = G__25040;
count__25029 = G__25041;
i__25030 = G__25042;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__25044 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__25044,(0),null);var start_wrap = cljs.core.nth.call(null,vec__25044,(1),null);var end_wrap = cljs.core.nth.call(null,vec__25044,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__25045 = wrapper.lastChild;
var G__25046 = (level - (1));
wrapper = G__25045;
level = G__25046;
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
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
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
domina.DomContent = (function (){var obj25048 = {};return obj25048;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3625__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__25049){
var mesg = cljs.core.seq(arglist__25049);
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
log.cljs$lang$applyTo = (function (arglist__25050){
var mesg = cljs.core.seq(arglist__25050);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__25051){
var contents = cljs.core.seq(arglist__25051);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__25052_SHARP_){return p1__25052_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__25053_SHARP_,p2__25054_SHARP_){return goog.dom.insertChildAt(p1__25053_SHARP_,p2__25054_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__25056_SHARP_,p2__25055_SHARP_){return goog.dom.insertSiblingBefore(p2__25055_SHARP_,p1__25056_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__25058_SHARP_,p2__25057_SHARP_){return goog.dom.insertSiblingAfter(p2__25057_SHARP_,p1__25058_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__25060_SHARP_,p2__25059_SHARP_){return goog.dom.replaceNode(p2__25059_SHARP_,p1__25060_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__25065_25069 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25066_25070 = null;var count__25067_25071 = (0);var i__25068_25072 = (0);while(true){
if((i__25068_25072 < count__25067_25071))
{var n_25073 = cljs.core._nth.call(null,chunk__25066_25070,i__25068_25072);goog.style.setStyle(n_25073,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25074 = seq__25065_25069;
var G__25075 = chunk__25066_25070;
var G__25076 = count__25067_25071;
var G__25077 = (i__25068_25072 + (1));
seq__25065_25069 = G__25074;
chunk__25066_25070 = G__25075;
count__25067_25071 = G__25076;
i__25068_25072 = G__25077;
continue;
}
} else
{var temp__4126__auto___25078 = cljs.core.seq.call(null,seq__25065_25069);if(temp__4126__auto___25078)
{var seq__25065_25079__$1 = temp__4126__auto___25078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25065_25079__$1))
{var c__4406__auto___25080 = cljs.core.chunk_first.call(null,seq__25065_25079__$1);{
var G__25081 = cljs.core.chunk_rest.call(null,seq__25065_25079__$1);
var G__25082 = c__4406__auto___25080;
var G__25083 = cljs.core.count.call(null,c__4406__auto___25080);
var G__25084 = (0);
seq__25065_25069 = G__25081;
chunk__25066_25070 = G__25082;
count__25067_25071 = G__25083;
i__25068_25072 = G__25084;
continue;
}
} else
{var n_25085 = cljs.core.first.call(null,seq__25065_25079__$1);goog.style.setStyle(n_25085,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25086 = cljs.core.next.call(null,seq__25065_25079__$1);
var G__25087 = null;
var G__25088 = (0);
var G__25089 = (0);
seq__25065_25069 = G__25086;
chunk__25066_25070 = G__25087;
count__25067_25071 = G__25088;
i__25068_25072 = G__25089;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25090){
var content = cljs.core.first(arglist__25090);
arglist__25090 = cljs.core.next(arglist__25090);
var name = cljs.core.first(arglist__25090);
var value = cljs.core.rest(arglist__25090);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__25095_25099 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25096_25100 = null;var count__25097_25101 = (0);var i__25098_25102 = (0);while(true){
if((i__25098_25102 < count__25097_25101))
{var n_25103 = cljs.core._nth.call(null,chunk__25096_25100,i__25098_25102);n_25103.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25104 = seq__25095_25099;
var G__25105 = chunk__25096_25100;
var G__25106 = count__25097_25101;
var G__25107 = (i__25098_25102 + (1));
seq__25095_25099 = G__25104;
chunk__25096_25100 = G__25105;
count__25097_25101 = G__25106;
i__25098_25102 = G__25107;
continue;
}
} else
{var temp__4126__auto___25108 = cljs.core.seq.call(null,seq__25095_25099);if(temp__4126__auto___25108)
{var seq__25095_25109__$1 = temp__4126__auto___25108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25095_25109__$1))
{var c__4406__auto___25110 = cljs.core.chunk_first.call(null,seq__25095_25109__$1);{
var G__25111 = cljs.core.chunk_rest.call(null,seq__25095_25109__$1);
var G__25112 = c__4406__auto___25110;
var G__25113 = cljs.core.count.call(null,c__4406__auto___25110);
var G__25114 = (0);
seq__25095_25099 = G__25111;
chunk__25096_25100 = G__25112;
count__25097_25101 = G__25113;
i__25098_25102 = G__25114;
continue;
}
} else
{var n_25115 = cljs.core.first.call(null,seq__25095_25109__$1);n_25115.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25116 = cljs.core.next.call(null,seq__25095_25109__$1);
var G__25117 = null;
var G__25118 = (0);
var G__25119 = (0);
seq__25095_25099 = G__25116;
chunk__25096_25100 = G__25117;
count__25097_25101 = G__25118;
i__25098_25102 = G__25119;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__25120){
var content = cljs.core.first(arglist__25120);
arglist__25120 = cljs.core.next(arglist__25120);
var name = cljs.core.first(arglist__25120);
var value = cljs.core.rest(arglist__25120);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__25125_25129 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25126_25130 = null;var count__25127_25131 = (0);var i__25128_25132 = (0);while(true){
if((i__25128_25132 < count__25127_25131))
{var n_25133 = cljs.core._nth.call(null,chunk__25126_25130,i__25128_25132);n_25133.removeAttribute(cljs.core.name.call(null,name));
{
var G__25134 = seq__25125_25129;
var G__25135 = chunk__25126_25130;
var G__25136 = count__25127_25131;
var G__25137 = (i__25128_25132 + (1));
seq__25125_25129 = G__25134;
chunk__25126_25130 = G__25135;
count__25127_25131 = G__25136;
i__25128_25132 = G__25137;
continue;
}
} else
{var temp__4126__auto___25138 = cljs.core.seq.call(null,seq__25125_25129);if(temp__4126__auto___25138)
{var seq__25125_25139__$1 = temp__4126__auto___25138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25125_25139__$1))
{var c__4406__auto___25140 = cljs.core.chunk_first.call(null,seq__25125_25139__$1);{
var G__25141 = cljs.core.chunk_rest.call(null,seq__25125_25139__$1);
var G__25142 = c__4406__auto___25140;
var G__25143 = cljs.core.count.call(null,c__4406__auto___25140);
var G__25144 = (0);
seq__25125_25129 = G__25141;
chunk__25126_25130 = G__25142;
count__25127_25131 = G__25143;
i__25128_25132 = G__25144;
continue;
}
} else
{var n_25145 = cljs.core.first.call(null,seq__25125_25139__$1);n_25145.removeAttribute(cljs.core.name.call(null,name));
{
var G__25146 = cljs.core.next.call(null,seq__25125_25139__$1);
var G__25147 = null;
var G__25148 = (0);
var G__25149 = (0);
seq__25125_25129 = G__25146;
chunk__25126_25130 = G__25147;
count__25127_25131 = G__25148;
i__25128_25132 = G__25149;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__25151 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__25151,(0),null);var v = cljs.core.nth.call(null,vec__25151,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
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
return (function (p1__25152_SHARP_){var attr = attrs__$1.item(p1__25152_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__25159_25165 = cljs.core.seq.call(null,styles);var chunk__25160_25166 = null;var count__25161_25167 = (0);var i__25162_25168 = (0);while(true){
if((i__25162_25168 < count__25161_25167))
{var vec__25163_25169 = cljs.core._nth.call(null,chunk__25160_25166,i__25162_25168);var name_25170 = cljs.core.nth.call(null,vec__25163_25169,(0),null);var value_25171 = cljs.core.nth.call(null,vec__25163_25169,(1),null);domina.set_style_BANG_.call(null,content,name_25170,value_25171);
{
var G__25172 = seq__25159_25165;
var G__25173 = chunk__25160_25166;
var G__25174 = count__25161_25167;
var G__25175 = (i__25162_25168 + (1));
seq__25159_25165 = G__25172;
chunk__25160_25166 = G__25173;
count__25161_25167 = G__25174;
i__25162_25168 = G__25175;
continue;
}
} else
{var temp__4126__auto___25176 = cljs.core.seq.call(null,seq__25159_25165);if(temp__4126__auto___25176)
{var seq__25159_25177__$1 = temp__4126__auto___25176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25159_25177__$1))
{var c__4406__auto___25178 = cljs.core.chunk_first.call(null,seq__25159_25177__$1);{
var G__25179 = cljs.core.chunk_rest.call(null,seq__25159_25177__$1);
var G__25180 = c__4406__auto___25178;
var G__25181 = cljs.core.count.call(null,c__4406__auto___25178);
var G__25182 = (0);
seq__25159_25165 = G__25179;
chunk__25160_25166 = G__25180;
count__25161_25167 = G__25181;
i__25162_25168 = G__25182;
continue;
}
} else
{var vec__25164_25183 = cljs.core.first.call(null,seq__25159_25177__$1);var name_25184 = cljs.core.nth.call(null,vec__25164_25183,(0),null);var value_25185 = cljs.core.nth.call(null,vec__25164_25183,(1),null);domina.set_style_BANG_.call(null,content,name_25184,value_25185);
{
var G__25186 = cljs.core.next.call(null,seq__25159_25177__$1);
var G__25187 = null;
var G__25188 = (0);
var G__25189 = (0);
seq__25159_25165 = G__25186;
chunk__25160_25166 = G__25187;
count__25161_25167 = G__25188;
i__25162_25168 = G__25189;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__25196_25202 = cljs.core.seq.call(null,attrs);var chunk__25197_25203 = null;var count__25198_25204 = (0);var i__25199_25205 = (0);while(true){
if((i__25199_25205 < count__25198_25204))
{var vec__25200_25206 = cljs.core._nth.call(null,chunk__25197_25203,i__25199_25205);var name_25207 = cljs.core.nth.call(null,vec__25200_25206,(0),null);var value_25208 = cljs.core.nth.call(null,vec__25200_25206,(1),null);domina.set_attr_BANG_.call(null,content,name_25207,value_25208);
{
var G__25209 = seq__25196_25202;
var G__25210 = chunk__25197_25203;
var G__25211 = count__25198_25204;
var G__25212 = (i__25199_25205 + (1));
seq__25196_25202 = G__25209;
chunk__25197_25203 = G__25210;
count__25198_25204 = G__25211;
i__25199_25205 = G__25212;
continue;
}
} else
{var temp__4126__auto___25213 = cljs.core.seq.call(null,seq__25196_25202);if(temp__4126__auto___25213)
{var seq__25196_25214__$1 = temp__4126__auto___25213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25196_25214__$1))
{var c__4406__auto___25215 = cljs.core.chunk_first.call(null,seq__25196_25214__$1);{
var G__25216 = cljs.core.chunk_rest.call(null,seq__25196_25214__$1);
var G__25217 = c__4406__auto___25215;
var G__25218 = cljs.core.count.call(null,c__4406__auto___25215);
var G__25219 = (0);
seq__25196_25202 = G__25216;
chunk__25197_25203 = G__25217;
count__25198_25204 = G__25218;
i__25199_25205 = G__25219;
continue;
}
} else
{var vec__25201_25220 = cljs.core.first.call(null,seq__25196_25214__$1);var name_25221 = cljs.core.nth.call(null,vec__25201_25220,(0),null);var value_25222 = cljs.core.nth.call(null,vec__25201_25220,(1),null);domina.set_attr_BANG_.call(null,content,name_25221,value_25222);
{
var G__25223 = cljs.core.next.call(null,seq__25196_25214__$1);
var G__25224 = null;
var G__25225 = (0);
var G__25226 = (0);
seq__25196_25202 = G__25223;
chunk__25197_25203 = G__25224;
count__25198_25204 = G__25225;
i__25199_25205 = G__25226;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__25231_25235 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25232_25236 = null;var count__25233_25237 = (0);var i__25234_25238 = (0);while(true){
if((i__25234_25238 < count__25233_25237))
{var node_25239 = cljs.core._nth.call(null,chunk__25232_25236,i__25234_25238);goog.dom.classes.add(node_25239,class$);
{
var G__25240 = seq__25231_25235;
var G__25241 = chunk__25232_25236;
var G__25242 = count__25233_25237;
var G__25243 = (i__25234_25238 + (1));
seq__25231_25235 = G__25240;
chunk__25232_25236 = G__25241;
count__25233_25237 = G__25242;
i__25234_25238 = G__25243;
continue;
}
} else
{var temp__4126__auto___25244 = cljs.core.seq.call(null,seq__25231_25235);if(temp__4126__auto___25244)
{var seq__25231_25245__$1 = temp__4126__auto___25244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25231_25245__$1))
{var c__4406__auto___25246 = cljs.core.chunk_first.call(null,seq__25231_25245__$1);{
var G__25247 = cljs.core.chunk_rest.call(null,seq__25231_25245__$1);
var G__25248 = c__4406__auto___25246;
var G__25249 = cljs.core.count.call(null,c__4406__auto___25246);
var G__25250 = (0);
seq__25231_25235 = G__25247;
chunk__25232_25236 = G__25248;
count__25233_25237 = G__25249;
i__25234_25238 = G__25250;
continue;
}
} else
{var node_25251 = cljs.core.first.call(null,seq__25231_25245__$1);goog.dom.classes.add(node_25251,class$);
{
var G__25252 = cljs.core.next.call(null,seq__25231_25245__$1);
var G__25253 = null;
var G__25254 = (0);
var G__25255 = (0);
seq__25231_25235 = G__25252;
chunk__25232_25236 = G__25253;
count__25233_25237 = G__25254;
i__25234_25238 = G__25255;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__25260_25264 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25261_25265 = null;var count__25262_25266 = (0);var i__25263_25267 = (0);while(true){
if((i__25263_25267 < count__25262_25266))
{var node_25268 = cljs.core._nth.call(null,chunk__25261_25265,i__25263_25267);goog.dom.classes.remove(node_25268,class$);
{
var G__25269 = seq__25260_25264;
var G__25270 = chunk__25261_25265;
var G__25271 = count__25262_25266;
var G__25272 = (i__25263_25267 + (1));
seq__25260_25264 = G__25269;
chunk__25261_25265 = G__25270;
count__25262_25266 = G__25271;
i__25263_25267 = G__25272;
continue;
}
} else
{var temp__4126__auto___25273 = cljs.core.seq.call(null,seq__25260_25264);if(temp__4126__auto___25273)
{var seq__25260_25274__$1 = temp__4126__auto___25273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25260_25274__$1))
{var c__4406__auto___25275 = cljs.core.chunk_first.call(null,seq__25260_25274__$1);{
var G__25276 = cljs.core.chunk_rest.call(null,seq__25260_25274__$1);
var G__25277 = c__4406__auto___25275;
var G__25278 = cljs.core.count.call(null,c__4406__auto___25275);
var G__25279 = (0);
seq__25260_25264 = G__25276;
chunk__25261_25265 = G__25277;
count__25262_25266 = G__25278;
i__25263_25267 = G__25279;
continue;
}
} else
{var node_25280 = cljs.core.first.call(null,seq__25260_25274__$1);goog.dom.classes.remove(node_25280,class$);
{
var G__25281 = cljs.core.next.call(null,seq__25260_25274__$1);
var G__25282 = null;
var G__25283 = (0);
var G__25284 = (0);
seq__25260_25264 = G__25281;
chunk__25261_25265 = G__25282;
count__25262_25266 = G__25283;
i__25263_25267 = G__25284;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__25289_25293 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25290_25294 = null;var count__25291_25295 = (0);var i__25292_25296 = (0);while(true){
if((i__25292_25296 < count__25291_25295))
{var node_25297 = cljs.core._nth.call(null,chunk__25290_25294,i__25292_25296);goog.dom.classes.toggle(node_25297,class$);
{
var G__25298 = seq__25289_25293;
var G__25299 = chunk__25290_25294;
var G__25300 = count__25291_25295;
var G__25301 = (i__25292_25296 + (1));
seq__25289_25293 = G__25298;
chunk__25290_25294 = G__25299;
count__25291_25295 = G__25300;
i__25292_25296 = G__25301;
continue;
}
} else
{var temp__4126__auto___25302 = cljs.core.seq.call(null,seq__25289_25293);if(temp__4126__auto___25302)
{var seq__25289_25303__$1 = temp__4126__auto___25302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25289_25303__$1))
{var c__4406__auto___25304 = cljs.core.chunk_first.call(null,seq__25289_25303__$1);{
var G__25305 = cljs.core.chunk_rest.call(null,seq__25289_25303__$1);
var G__25306 = c__4406__auto___25304;
var G__25307 = cljs.core.count.call(null,c__4406__auto___25304);
var G__25308 = (0);
seq__25289_25293 = G__25305;
chunk__25290_25294 = G__25306;
count__25291_25295 = G__25307;
i__25292_25296 = G__25308;
continue;
}
} else
{var node_25309 = cljs.core.first.call(null,seq__25289_25303__$1);goog.dom.classes.toggle(node_25309,class$);
{
var G__25310 = cljs.core.next.call(null,seq__25289_25303__$1);
var G__25311 = null;
var G__25312 = (0);
var G__25313 = (0);
seq__25289_25293 = G__25310;
chunk__25290_25294 = G__25311;
count__25291_25295 = G__25312;
i__25292_25296 = G__25313;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_25322__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__25318_25323 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25319_25324 = null;var count__25320_25325 = (0);var i__25321_25326 = (0);while(true){
if((i__25321_25326 < count__25320_25325))
{var node_25327 = cljs.core._nth.call(null,chunk__25319_25324,i__25321_25326);goog.dom.classes.set(node_25327,classes_25322__$1);
{
var G__25328 = seq__25318_25323;
var G__25329 = chunk__25319_25324;
var G__25330 = count__25320_25325;
var G__25331 = (i__25321_25326 + (1));
seq__25318_25323 = G__25328;
chunk__25319_25324 = G__25329;
count__25320_25325 = G__25330;
i__25321_25326 = G__25331;
continue;
}
} else
{var temp__4126__auto___25332 = cljs.core.seq.call(null,seq__25318_25323);if(temp__4126__auto___25332)
{var seq__25318_25333__$1 = temp__4126__auto___25332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25318_25333__$1))
{var c__4406__auto___25334 = cljs.core.chunk_first.call(null,seq__25318_25333__$1);{
var G__25335 = cljs.core.chunk_rest.call(null,seq__25318_25333__$1);
var G__25336 = c__4406__auto___25334;
var G__25337 = cljs.core.count.call(null,c__4406__auto___25334);
var G__25338 = (0);
seq__25318_25323 = G__25335;
chunk__25319_25324 = G__25336;
count__25320_25325 = G__25337;
i__25321_25326 = G__25338;
continue;
}
} else
{var node_25339 = cljs.core.first.call(null,seq__25318_25333__$1);goog.dom.classes.set(node_25339,classes_25322__$1);
{
var G__25340 = cljs.core.next.call(null,seq__25318_25333__$1);
var G__25341 = null;
var G__25342 = (0);
var G__25343 = (0);
seq__25318_25323 = G__25340;
chunk__25319_25324 = G__25341;
count__25320_25325 = G__25342;
i__25321_25326 = G__25343;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__25348_25352 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25349_25353 = null;var count__25350_25354 = (0);var i__25351_25355 = (0);while(true){
if((i__25351_25355 < count__25350_25354))
{var node_25356 = cljs.core._nth.call(null,chunk__25349_25353,i__25351_25355);goog.dom.setTextContent(node_25356,value);
{
var G__25357 = seq__25348_25352;
var G__25358 = chunk__25349_25353;
var G__25359 = count__25350_25354;
var G__25360 = (i__25351_25355 + (1));
seq__25348_25352 = G__25357;
chunk__25349_25353 = G__25358;
count__25350_25354 = G__25359;
i__25351_25355 = G__25360;
continue;
}
} else
{var temp__4126__auto___25361 = cljs.core.seq.call(null,seq__25348_25352);if(temp__4126__auto___25361)
{var seq__25348_25362__$1 = temp__4126__auto___25361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25348_25362__$1))
{var c__4406__auto___25363 = cljs.core.chunk_first.call(null,seq__25348_25362__$1);{
var G__25364 = cljs.core.chunk_rest.call(null,seq__25348_25362__$1);
var G__25365 = c__4406__auto___25363;
var G__25366 = cljs.core.count.call(null,c__4406__auto___25363);
var G__25367 = (0);
seq__25348_25352 = G__25364;
chunk__25349_25353 = G__25365;
count__25350_25354 = G__25366;
i__25351_25355 = G__25367;
continue;
}
} else
{var node_25368 = cljs.core.first.call(null,seq__25348_25362__$1);goog.dom.setTextContent(node_25368,value);
{
var G__25369 = cljs.core.next.call(null,seq__25348_25362__$1);
var G__25370 = null;
var G__25371 = (0);
var G__25372 = (0);
seq__25348_25352 = G__25369;
chunk__25349_25353 = G__25370;
count__25350_25354 = G__25371;
i__25351_25355 = G__25372;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25377_25381 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25378_25382 = null;var count__25379_25383 = (0);var i__25380_25384 = (0);while(true){
if((i__25380_25384 < count__25379_25383))
{var node_25385 = cljs.core._nth.call(null,chunk__25378_25382,i__25380_25384);goog.dom.forms.setValue(node_25385,value);
{
var G__25386 = seq__25377_25381;
var G__25387 = chunk__25378_25382;
var G__25388 = count__25379_25383;
var G__25389 = (i__25380_25384 + (1));
seq__25377_25381 = G__25386;
chunk__25378_25382 = G__25387;
count__25379_25383 = G__25388;
i__25380_25384 = G__25389;
continue;
}
} else
{var temp__4126__auto___25390 = cljs.core.seq.call(null,seq__25377_25381);if(temp__4126__auto___25390)
{var seq__25377_25391__$1 = temp__4126__auto___25390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25377_25391__$1))
{var c__4406__auto___25392 = cljs.core.chunk_first.call(null,seq__25377_25391__$1);{
var G__25393 = cljs.core.chunk_rest.call(null,seq__25377_25391__$1);
var G__25394 = c__4406__auto___25392;
var G__25395 = cljs.core.count.call(null,c__4406__auto___25392);
var G__25396 = (0);
seq__25377_25381 = G__25393;
chunk__25378_25382 = G__25394;
count__25379_25383 = G__25395;
i__25380_25384 = G__25396;
continue;
}
} else
{var node_25397 = cljs.core.first.call(null,seq__25377_25391__$1);goog.dom.forms.setValue(node_25397,value);
{
var G__25398 = cljs.core.next.call(null,seq__25377_25391__$1);
var G__25399 = null;
var G__25400 = (0);
var G__25401 = (0);
seq__25377_25381 = G__25398;
chunk__25378_25382 = G__25399;
count__25379_25383 = G__25400;
i__25380_25384 = G__25401;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_25412 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25408_25413 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25409_25414 = null;var count__25410_25415 = (0);var i__25411_25416 = (0);while(true){
if((i__25411_25416 < count__25410_25415))
{var node_25417 = cljs.core._nth.call(null,chunk__25409_25414,i__25411_25416);node_25417.innerHTML = value_25412;
{
var G__25418 = seq__25408_25413;
var G__25419 = chunk__25409_25414;
var G__25420 = count__25410_25415;
var G__25421 = (i__25411_25416 + (1));
seq__25408_25413 = G__25418;
chunk__25409_25414 = G__25419;
count__25410_25415 = G__25420;
i__25411_25416 = G__25421;
continue;
}
} else
{var temp__4126__auto___25422 = cljs.core.seq.call(null,seq__25408_25413);if(temp__4126__auto___25422)
{var seq__25408_25423__$1 = temp__4126__auto___25422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25408_25423__$1))
{var c__4406__auto___25424 = cljs.core.chunk_first.call(null,seq__25408_25423__$1);{
var G__25425 = cljs.core.chunk_rest.call(null,seq__25408_25423__$1);
var G__25426 = c__4406__auto___25424;
var G__25427 = cljs.core.count.call(null,c__4406__auto___25424);
var G__25428 = (0);
seq__25408_25413 = G__25425;
chunk__25409_25414 = G__25426;
count__25410_25415 = G__25427;
i__25411_25416 = G__25428;
continue;
}
} else
{var node_25429 = cljs.core.first.call(null,seq__25408_25423__$1);node_25429.innerHTML = value_25412;
{
var G__25430 = cljs.core.next.call(null,seq__25408_25423__$1);
var G__25431 = null;
var G__25432 = (0);
var G__25433 = (0);
seq__25408_25413 = G__25430;
chunk__25409_25414 = G__25431;
count__25410_25415 = G__25432;
i__25411_25416 = G__25433;
continue;
}
}
} else
{}
}
break;
}
}catch (e25407){if((e25407 instanceof Error))
{var e_25434 = e25407;domina.replace_children_BANG_.call(null,content,value_25412);
} else
{throw e25407;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25441_25445 = cljs.core.seq.call(null,children);var chunk__25442_25446 = null;var count__25443_25447 = (0);var i__25444_25448 = (0);while(true){
if((i__25444_25448 < count__25443_25447))
{var child_25449 = cljs.core._nth.call(null,chunk__25442_25446,i__25444_25448);frag.appendChild(child_25449);
{
var G__25450 = seq__25441_25445;
var G__25451 = chunk__25442_25446;
var G__25452 = count__25443_25447;
var G__25453 = (i__25444_25448 + (1));
seq__25441_25445 = G__25450;
chunk__25442_25446 = G__25451;
count__25443_25447 = G__25452;
i__25444_25448 = G__25453;
continue;
}
} else
{var temp__4126__auto___25454 = cljs.core.seq.call(null,seq__25441_25445);if(temp__4126__auto___25454)
{var seq__25441_25455__$1 = temp__4126__auto___25454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25441_25455__$1))
{var c__4406__auto___25456 = cljs.core.chunk_first.call(null,seq__25441_25455__$1);{
var G__25457 = cljs.core.chunk_rest.call(null,seq__25441_25455__$1);
var G__25458 = c__4406__auto___25456;
var G__25459 = cljs.core.count.call(null,c__4406__auto___25456);
var G__25460 = (0);
seq__25441_25445 = G__25457;
chunk__25442_25446 = G__25458;
count__25443_25447 = G__25459;
i__25444_25448 = G__25460;
continue;
}
} else
{var child_25461 = cljs.core.first.call(null,seq__25441_25455__$1);frag.appendChild(child_25461);
{
var G__25462 = cljs.core.next.call(null,seq__25441_25455__$1);
var G__25463 = null;
var G__25464 = (0);
var G__25465 = (0);
seq__25441_25445 = G__25462;
chunk__25442_25446 = G__25463;
count__25443_25447 = G__25464;
i__25444_25448 = G__25465;
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
return (function (p1__25435_SHARP_,p2__25436_SHARP_){return f.call(null,p1__25435_SHARP_,p2__25436_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
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
{if((function (){var G__25467 = list_thing;if(G__25467)
{var bit__4300__auto__ = (G__25467.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__25467.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25467.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25467);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25467);
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
{if((function (){var G__25468 = content;if(G__25468)
{var bit__4300__auto__ = (G__25468.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__25468.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25468.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25468);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25468);
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
{if((function (){var G__25469 = content;if(G__25469)
{var bit__4300__auto__ = (G__25469.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__25469.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25469.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25469);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25469);
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
